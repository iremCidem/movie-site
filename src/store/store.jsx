import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import MovieSagas from "./sagas/movieSagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: movieReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(MovieSagas);
