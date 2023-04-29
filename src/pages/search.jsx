import React, { useEffect, useState } from "react";
import MainPart from "../styledComponets/MainPart";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import MoviePoster from "../components/MoviePoster/index";
import Loading from "./loading";

export default function Search() {
  const [search, setSearch] = useState();
  const debouncedSearch = useDebounce(search, 1000);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  function getMovies(url) {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    return fetchData();
  }

  const url1 = `${process.env.REACT_APP_MOVIE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`;
  const url2 =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=5f72f5d4af65fd2fcc05d016488a2e2b";

  useEffect(() => {
    if (debouncedSearch) {
      getMovies(url1);
    } else {
      getMovies(url2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);
  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <MainPart>error</MainPart>;
  }

  return (
    <MainPart>
      <label>Search Movie</label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {data.length >= 1 ? (
          <MoviePoster movieData={data} />
        ) : (
          <div>there were no results. </div>
        )}
      </div>
    </MainPart>
  );
}
