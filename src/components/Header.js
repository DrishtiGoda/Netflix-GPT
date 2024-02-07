import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <img src={logo} alt="logo" className="h-12 absolute mx-96 my-5 z-10" />
    </div>
  );
};

export default Header;
