import React from "react";
import MovieList from "./MovieList";

const GptMovieSuggetion = ({movies}) => {
  return (
    <div>
      {/* {movies.map((movie) => {
        console.log(movie);
        return (
          <MovieList
            key={movie.movieName}
            title={movie.movieName}
            movie={movie.movies}
          />
        );
      })} */}
    </div>
  );
};

export default GptMovieSuggetion;
