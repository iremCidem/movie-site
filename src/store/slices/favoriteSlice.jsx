import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  movieDatas: [],
  loading: false,
  error: undefined,
};
export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    getMoviesRequest: (state, action) => {
      state.loading = true;
    },
    getMoviesRequestSuccess: (state, action) => {
      state.movieDatas = action.payload;
      state.loading = false;
    },
    getMoviesRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addMovieToFavorites: (state, action) => {
      //
    },
  },
});
export const {
  getMoviesRequest,
  getMoviesRequestSuccess,
  getMoviesRequestFail,
  addMovieToFavorites,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
