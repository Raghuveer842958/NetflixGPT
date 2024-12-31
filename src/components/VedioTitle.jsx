import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black text-white">
      <div className="ml-14 mt-52">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="w-1/4 py-6 font-lg">{overview}</p>
        <div>
          <button className="bg-white mr-1 py-2 px-12 rounded-lg text-black font-lg">
            Play
          </button>
          <button className="bg-gray-500 ml-1 py-2 px-12 rounded-lg bg-opacity-50 text-white font-lg">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VedioTitle;
