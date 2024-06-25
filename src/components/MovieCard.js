import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="poster"
        src={IMAGE_URL + posterPath}
        // style={{ maxWidth: "100%" }}
      />
    </div>
  );
};

export default MovieCard;