import { call, put, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import {
  getMoviesRequest,
  getMoviesRequestFail,
  getMoviesRequestSuccess,
  addMovieToFavoritesRequest,
  addMovieToFavoritesSuccess,
} from "../slices/movieSlice";

function* addFavoritesSaga(action) {
  const favorites = yield select((state) => state.favorites); //yield select ile reduxtaki stateimize ulaştık.
  const movieId = action.payload; //dispatch içinde idyi gönderiyoruz.
  const checkIfDataExist = favorites?.find((item) => item.id === movieId);
  if (!checkIfDataExist) {
    const movies = yield select((state) => state.movieDatas);
    const movie = movies.find((item) => item.id === movieId);
    const data = [...(favorites || []), movie];
    localStorage.setItem("user_favorites", JSON.stringify(data));
    yield put(addMovieToFavoritesSuccess(data));
  } else {
    const newFavorites = favorites.filter((item) => item.id !== movieId);
    localStorage.setItem("user_favorites", JSON.stringify(newFavorites));
    yield put(addMovieToFavoritesSuccess(newFavorites));
  }
}
function* GetMoviesSaga(action) {
  try {
    const response = yield call(() => axios.get(action.payload)); //yield await gibi düşünülebilir, içindeki işlemi bekliyor.
    yield put(getMoviesRequestSuccess(response.data.results));
  } catch (e) {
    yield put(getMoviesRequestFail(e));
  }
}

function* MovieSagas() {
  yield takeLatest(getMoviesRequest.type, GetMoviesSaga);
  yield takeLatest(addMovieToFavoritesRequest.type, addFavoritesSaga);
}

export default MovieSagas;
