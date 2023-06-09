import React, { useState, useEffect } from "react";
import MainPart from "../styledComponets/MainPart";
import { Radio } from "antd";
import MoviePoster from "../components/MoviePoster/index";
import Loading from "../components/Loading";
import { getMoviesRequest } from "../store/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../styledComponets/Header";

export default function Trends() {
  const dispatch = useDispatch();
  const [selection, setSelection] = useState("day");
  let url = `${process.env.REACT_APP_MOVIE_URL}trending/movie/${selection}?api_key=${process.env.REACT_APP_API_KEY}`;
  const { loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMoviesRequest(url));
  }, [url, dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <MainPart>ERROR</MainPart>;
  }

  return (
    <MainPart>
      <Header>
        <div> Trends of the {selection}</div>
        <Radio.Group
          value={selection}
          onChange={(e) => {
            setSelection(e.target.value);
          }}
        >
          <Radio.Button value="day">day</Radio.Button>
          <Radio.Button value="week">week</Radio.Button>
        </Radio.Group>
      </Header>

      <div>
        <MoviePoster />
      </div>
    </MainPart>
  );
}
