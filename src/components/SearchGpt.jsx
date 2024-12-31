import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetion from "./GptMovieSuggetion";
import { BG_URL } from "../utils/constant";

const SearchGpt = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggetion />
      </div>
    </div>
  );
};

export default SearchGpt;
