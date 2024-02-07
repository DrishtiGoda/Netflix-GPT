import React, { useState } from "react";
import Header from "./Header";
import background from "../images/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="absolute h-screen w-screen bg-cover"
          src={background}
          alt="logo"
        />
        <div className="absolute h-screen w-screen bg-black opacity-65 "></div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <form className="absolute w-3/12 p-12 bg-black  flex items-start justify-center flex-col bg-opacity-65">
          <h1 className="text-white text-2xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm ? (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 bg-gray-700 w-full"
            />
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 bg-gray-700 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 bg-gray-700 w-full "
          />
          <button className="p-2 my-2 bg-red-600 text-white w-full rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center justify-center w-full p-2">
            <h1 className="text-white">Forgot Password?</h1>
          </div>
          <div className="flex items-center justify-center w-full p-2">
            {isSignInForm ? (
              <h1 className="text-gray-500">
                New to Netflix?
                <span
                  className="text-white hover:underline cursor-pointer"
                  onClick={toggleSignUpForm}
                >
                  Sign up now
                </span>
              </h1>
            ) : (
              <h1 className="text-gray-500">
                Already a User?
                <span
                  className="text-white hover:underline cursor-pointer"
                  onClick={toggleSignUpForm}
                >
                  Sign In now
                </span>
              </h1>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
