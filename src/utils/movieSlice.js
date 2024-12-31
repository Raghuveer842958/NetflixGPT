import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVedio: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
    removeTrailerVedio: (state) => {
      state.trailerVedio = null;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  removeNowPlayingMovies,
  addTrailerVedio,
  removeTrailerVedio,
} = movieSlice.actions;
