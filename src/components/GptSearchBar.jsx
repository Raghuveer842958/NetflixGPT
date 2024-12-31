import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import supportedMovies from "../utils/movieConstant";
import {
  setSelectedMovie,
  setTmdbMoviesMovie,
} from "../utils/recomendedMovieSlice";
import { API_OPTIONS } from "../utils/constant";
import MovieList from "./MovieList";
import GptMovieSuggetion from "./GptMovieSuggetion";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const { selectedMovie: userMovie, recomendedMovies: movieList } = useSelector(
    (store) => store.recomendedMovies
  );
  const tmdbMovieList = useSelector(
    (store) => store.recomendedMovies.tmdbMovies
  );

  // console.log("Tmdb movies is :", tmdbMovieList);

  const setMovieType = (e) => {
    dispatch(setSelectedMovie(e.target.value));
  };

  const searchMovie = async (movieName) => {
    // fetch(
    //   `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    //     movieName
    //   )}&include_adult=false&language=en-US&page=1`,
    //   API_OPTIONS
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => console.error(err));

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movieName
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log("TMDB Response is :", movieName, jsonData);
    return { movies: jsonData.results, movieName };
  };

  const handleGptSearchClick = async () => {
    const filteredList = movieList.filter(
      (movie) => movie.movieName === userMovie
    );

    const filteredMovies = filteredList[0].movieList;
    const newMovies = filteredMovies.map((movie) => searchMovie(movie));
    const tmdbMovies = await Promise.all(newMovies);
    dispatch(setTmdbMoviesMovie(tmdbMovies));

    // console.log("tmdbMovies is :", tmdbMovies);
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12 mt-20 mb-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <select className=" p-4 m-4 col-span-9" onClick={setMovieType}>
            {supportedMovies.map((movie) => (
              <option value={movie.movieName} key={movie.identifire}>
                {movie.movieName}
              </option>
            ))}
          </select>
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>

      <div className="bg-black m-10 mt-48 ">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          {tmdbMovieList &&
            tmdbMovieList?.map((movie) => {
              return (
                <MovieList
                  key={movie.movieName}
                  title={movie.movieName}
                  movie={movie.movies}
                />
              );
            })}
          Movies Found
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
