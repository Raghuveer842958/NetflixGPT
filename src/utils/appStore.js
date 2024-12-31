import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  movieReducer  from "./movieSlice";
import gptReducer from './gptSlice';
import configReducer from './configSlice';
import recomendedMovisReducer from './recomendedMovieSlice'

const appStore = configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer,
    gpt:gptReducer,
    config:configReducer,
    recomendedMovies:recomendedMovisReducer
  },
});

export default appStore;
