import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  movieDatas: [],
  loading: false,
  error: undefined,
};
export const movieSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getMoviesRequest: (state) => {
      state.loading = true;
    },
    getMoviesRequestSuccess: (state, action) => {
      state.loading = false;
      state.movieDatas = action.payload;
    },
    getMoviesRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addMovieToFavoritesRequest: (state) => {
      state.loading = true;
    },
    addMovieToFavoritesSuccess: (state, action) => {
      state.loading = false;
      state.favorites = action.payload;
    },
  },
});
export const {
  getMoviesRequest,
  getMoviesRequestSuccess,
  getMoviesRequestFail,
  addMovieToFavoritesRequest,
  addMovieToFavoritesSuccess,
} = movieSlice.actions;
export default movieSlice.reducer;
