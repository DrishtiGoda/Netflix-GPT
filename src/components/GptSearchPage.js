import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import background from "../images/background.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <div className="absolute h-screen w-screen  bg-black opacity-85"></div>
        <img
          src={background}
          alt="logo"
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
