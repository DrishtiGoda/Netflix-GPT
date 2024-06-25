import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import background from "../images/background.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          // className="absolute h-screen w-screen bg-cover"
          src={background}
          alt="logo"
        />
        <div className="absolute h-screen w-screen bg-black opacity-65 "></div>
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
