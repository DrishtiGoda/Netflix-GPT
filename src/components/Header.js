import React from "react";
import logo from "../images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import picture from "../images/picture.jpg";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // toggle GPT search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: picture,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser);
        navigate("/");
      }
    });
    /// Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className=" absolute flex w-screen text-white z-10 flex-col  md:flex-row  md:justify-between">
      <img src={logo} alt="logo" className="h-12 mx-auto md:mx-48 mt-5 z-10" />
      {user && (
        <div className="flex items-center justify-center md:p-5">
          <button
            className="py-1 px-2 m-2 text-white hover:text-gray-400 rounded"
            onClick={handleGptSearchClick}
          > 
            {gptSearch ? "Home" : "GPT Search "}
          </button>
          {gptSearch ? (
            <select
              className="py-1 text-white rounded bg-transparent"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          ) : (
            <></>
          )}
          {/* <img
            alt="usericon"
            className="w-8 h-8 rounded"
            src={user?.photoURL}
          /> */}
          <button
            className="px-4 text-white hover:text-gray-400"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
