import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../images/background.jpg";
import {
  checkValidDataForSignIn,
  checkValidDataForSignUp,
} from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import picture from "../images/picture.jpg";


const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    if (!isSignInForm) {
      const message = checkValidDataForSignUp(
        name.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;
    } else {
      const message = checkValidDataForSignIn(
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
      if (message) return;
    }

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: picture,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // console.log(errorCode + ":" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + ": " + errorMessage);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 p-12 bg-black  flex items-start justify-center flex-col bg-opacity-65"
        >
          <h1 className="text-white text-2xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm ? (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 bg-gray-700 w-full text-white"
            />
          ) : (
            <></>
          )}

          <input
            ref={email}
            autoComplete="email"
            type="email"
            placeholder="Email Address"
            className="p-2 my-2 bg-gray-700 w-full text-white"
          />
          <input
            ref={password}
            autoComplete="password"
            type="password"
            placeholder="Password"
            className="p-2 my-2 bg-gray-700 w-full text-white"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="p-2 my-2 bg-red-600 text-white w-full rounded"
            onClick={handleButtonClick}
          >
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
