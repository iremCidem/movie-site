import React, { useEffect, useState } from "react";
import MainPart from "../styledComponets/MainPart";
import useDebounce from "../hooks/useDebounce";
import MoviePoster from "../components/MoviePoster/index";
import Loading from "../components/Loading";
import { Header } from "../styledComponets/Header";
import { useSelector, useDispatch } from "react-redux";
import { getMoviesRequest } from "../store/slices/movieSlice";

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const debouncedSearch = useDebounce(search, 1000);
  const { loading, error, movieDatas } = useSelector((state) => state);

  const url1 = `${process.env.REACT_APP_MOVIE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`;
  const url2 =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=5f72f5d4af65fd2fcc05d016488a2e2b";

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(getMoviesRequest(url1));
    } else {
      dispatch(getMoviesRequest(url2));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <MainPart>error</MainPart>;
  }

  return (
    <MainPart>
      <Header>
        <label>Search Movie</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Movie"
        />
      </Header>

      <div>
        {movieDatas.length >= 1 ? (
          <MoviePoster />
        ) : (
          <div>there were no results. </div>
        )}
      </div>
    </MainPart>
  );
}
