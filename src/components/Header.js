import React from "react";
import logo from "../images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
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

  return (
    <div className=" absolute flex justify-between w-screen">
      <img src={logo} alt="logo" className="h-12  mx-96 my-5 z-10" />
      {user && (
        <div className="flex items-center p-5">
          <img
            alt="usericon"
            className="w-8 h-8 rounded"
            src={user?.photoURL}
          />
          <button className="font-bold px-2" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
