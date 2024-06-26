import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieInTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData.results;
  };

  const handleSearch = async () => {
    // make api call to GPT API and get movie results
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comman seperated like the example result given ahead. Example Result: Movie 1, Movie 2, Movie 3, Movie 4, Movie 5";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // error handling
    }

    const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovieList);

    const promiseArray = gptMovieList.map((movie) => searchMovieInTMDB(movie));

    const tmdbResuts = await Promise.all(promiseArray);
    console.log(tmdbResuts);

    dispatch(
      addGptMovieResult({ movieNames: gptMovieList, movieResults: tmdbResuts })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className=" w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded"
          placeholder={language[languageKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded col-span-3"
          onClick={handleSearch}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
