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

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
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
    <div className=" absolute flex justify-between w-screen text-white z-10">
      <img src={logo} alt="logo" className="h-12  mx-96 my-5 z-10" />
      {user && (
        <div className="flex items-center p-5">
          <img
            alt="usericon"
            className="w-8 h-8 rounded"
            src={user?.photoURL}
          />
          <button className="font-bold px-2 text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
