import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondnaryContainer from "./SecondnaryContainer";
import SearchGpt from "./SearchGpt";

const Browse = () => {
  const dispatch = useDispatch();
  const check = useGetNowPlayingMovies();
  const movies = useSelector((store) => store.movie);
  const isSearchView = useSelector((store) => store.gpt.showGptSearch);

  if (!movies) return;

  return (
    <div>
      <Header />
      {isSearchView ? (
        <SearchGpt />
      ) : (
        <>
          <MainContainer />
          <SecondnaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
