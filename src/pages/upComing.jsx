import React, { useEffect } from "react";
import MainPart from "../styledComponets/MainPart";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "../store/slices/movieSlice";
import MoviePoster from "../components/MoviePoster";
import { Header } from "../styledComponets/Header";
import Loading from "../components/Loading";

export default function UpComing() {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  useEffect(() => {
    dispatch(getMoviesRequest(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { loading, error } = useSelector((state) => state);
  if (loading) {
    return <Loading />;
  } else if (error) {
    return alert("data error");
  }
  return (
    <MainPart>
      <Header>Upcoming Movies</Header>
      <MoviePoster />
    </MainPart>
  );
}
