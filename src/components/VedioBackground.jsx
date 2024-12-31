import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VedioBackground = ({ movieId }) => {
  useGetMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie.trailerVedio);
  if (!trailer) return;

  return (
    <div className="w-screen z-20">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"
        }
        // +"?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
