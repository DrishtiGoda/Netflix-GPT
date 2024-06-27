import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] md:pt-[25%] px-6 absolute text-white bg-gradient-to-r from-black h-screen">
      <h1 className="text-2xl md:text-6xl font-bold"> {title} </h1>
      <p className="hidden md:block py-6 md:text-lg w-1/3 ">{overview}</p>
      <div className="py-2 md:py-0">
        <button className="bg-white text-black px-2 py-1 mr-2 md:px-6 md:py-2 md:mr-4 rounded text-lg hover:bg-opacity-80">
          <span> ► </span>Play
        </button>
        <button className="bg-gray-500 text-white px-2 py-1 md:px-6 md:py-2 rounded text-lg bg-opacity-50 hover:bg-opacity-40">
          {/* <span>i</span> */}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
