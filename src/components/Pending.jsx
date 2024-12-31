import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import { BG_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import useFetchMovieById from "../hooks/useFetchMovieById";
import { useParams } from "react-router-dom";

const Pending = () => {
  const param = useParams();
  const { id: movieId } = param;
  // console.log("Params is-1 :", param);
  // console.log("Params is :", movieId);
  useGetNowPlayingMovies();
  useFetchMovieById(movieId);
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const currMovie = useSelector((store) => store.recomendedMovies.playingMovie);

  if (!movies || !currMovie) return;
  return (
    <div className="relative h-screen w-screen">
      {/* <Header/> */}
      {/* Background Image */}
      {/* <div className="absolute inset-0 top-0 -z-10">
        <img className="h-full w-full object-cover" src={BG_URL} alt="logo" />
      </div> */}
      <div className="">
        <div className="border border-black w-full w-[100%] h-[550px]">
          <iframe
            className="w-[100%] h-[100%]"
            src={
              "https://www.youtube.com/embed/" +
              currMovie?.key 
            }
            // +"?&autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="bg-black">
        <div className=" mt-0  pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movie={movies} />
          <MovieList title={"Trending"} movie={movies} />
          {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
          <MovieList title={"Upcoming Movies"} movie={movies} />
          <MovieList title={"Horror"} movie={movies} />
        </div>
      </div>
    </div>
  );
};

export default Pending;
