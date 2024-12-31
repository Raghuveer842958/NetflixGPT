import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movie={movies} />
        <MovieList title={"Trending"} movie={movies} />
        {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
        <MovieList title={"Upcoming Movies"} movie={movies} />
        <MovieList title={"Horror"} movie={movies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
