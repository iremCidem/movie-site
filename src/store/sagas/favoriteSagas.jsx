import { call, put, takeLatest } from "redux-saga/effects";
import { addMovieToFavorites } from "../slices/favoriteSlice";

function* addStorageSaga(action) {
  try {
    const response = yield call(() => axios.get(action.payload));
    yield put(getMoviesRequestSuccess(response.data.results));
  } catch (e) {
    yield put(getMoviesRequestFail(e));
  }
}
