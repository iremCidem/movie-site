import React, { useEffect } from "react";
import MoviePoster from "../components/MoviePoster/index";
import Facer from "../components/Facer/index";
import Loading from "./loading";
import MainPart from "../styledComponets/MainPart";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "../store/slices/favoriteSlice";

export default function Home() {
  const dispatch = useDispatch();
  const url = `${process.env.REACT_APP_MOVIE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const { loading, error, movieDatas } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getMoviesRequest(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return alert("data error");
  } else if (loading) {
    return <Loading />;
  }
  const firstMovie = movieDatas[0];

  return (
    <MainPart>
      {firstMovie && <Facer movie={firstMovie} />}
      <MoviePoster />
    </MainPart>
  );
}
