import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] px-12 absolute text-white bg-gradient-to-r from-black h-screen">
      <h1 className="text-6xl font-bold"> {title} </h1>
      <p className="py-6 text-lg w-1/3 ">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-6 py-2 mr-4 rounded text-lg hover:bg-opacity-80">
          <span> ► </span>Play
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded text-lg bg-opacity-50 hover:bg-opacity-40">
          {/* <span>i</span> */}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
