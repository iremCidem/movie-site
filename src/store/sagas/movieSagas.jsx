import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getMoviesRequest,
  getMoviesRequestFail,
  getMoviesRequestSuccess,
} from "../slices/favoriteSlice";

function* GetMoviesSaga(action) {
  try {
    const response = yield call(() => axios.get(action.payload));
    yield put(getMoviesRequestSuccess(response.data.results));
  } catch (e) {
    yield put(getMoviesRequestFail(e));
  }
}

function* MovieSagas() {
  yield takeLatest(getMoviesRequest.type, GetMoviesSaga);
}

export default MovieSagas;
