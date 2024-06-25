import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Popular movies", movies);
  if (movies === null || movies.length === 0) {
    return;
  }

  console.log("Movie list", movies);
  return (
    <div className="px-6">
      <h1 className="text-3xl py-2 pl-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;