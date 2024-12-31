import MovieCard from "./MovieCart";

const MovieList = ({ title, movie }) => {
  // console.log("Title is :",title);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movie?.map((data) => (
            <MovieCard movieId={data.id} key={data.id} posterPath={data.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
