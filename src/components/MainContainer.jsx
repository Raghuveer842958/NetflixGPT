import React from "react";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if(!movies) return ;
  const mainMovie = movies[0];

  return (
    <div className="relavite">
      <VedioTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VedioBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
