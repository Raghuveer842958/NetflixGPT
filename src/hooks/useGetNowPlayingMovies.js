import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    try {
      const movieResponse = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const movieList = await movieResponse.json();
      // console.log("movie result is :",movieList);
      dispatch(addNowPlayingMovies(movieList?.results));
    } catch (error) {
      console.log("Error in Fetching Now Playing Movies :", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
