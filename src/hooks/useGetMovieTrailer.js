import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerVedio } from '../utils/movieSlice';
import { useEffect, useState } from 'react';

const useGetMovieTrailer = (movieId) => {
    const [movieTrailer,setMovieTrailer]=useState(null);
    const dispatch = useDispatch();
    const getMovieVedios = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        // "https://api.themoviedb.org/3/movie/now_playing?page=1"
        const movieVedio = await response.json();
        const filteredData = movieVedio.results.filter(
          (vedio) => vedio.type === "Trailer"
        );
  
        const trailer = filteredData[0];
        dispatch(addTrailerVedio(trailer));
      } catch (error) {
        console.log("Error in fetching movie vedio");
      }
    };
  
    useEffect(() => {
      getMovieVedios();
    }, []);
}

export default useGetMovieTrailer