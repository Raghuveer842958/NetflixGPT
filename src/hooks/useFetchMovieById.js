import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPlayingMovie } from "../utils/recomendedMovieSlice";

const useFetchMovieById = (movieId) => {
  // console.log("Called!!!");
  const dispatch = useDispatch();
  const getMovieVedios = async () => {
    try {
      console.log("Updated!!");
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const movieVedio = await response.json();
      const filteredData = movieVedio.results.filter(
        (vedio) => vedio.type === "Trailer"
      );

      const trailer = filteredData[0];
      dispatch(addPlayingMovie(trailer));
    } catch (error) {
      console.log("Error in fetching movie vedio");
    }
  };

  useEffect(() => {
    getMovieVedios();
  }, [movieId]);
};

export default useFetchMovieById;
