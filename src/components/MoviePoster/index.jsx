import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledImage, StyledRow, StyledCol, Icon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToFavoritesRequest } from "../../store/slices/movieSlice";

export default function MoviePoster({ selected }) {
  const dispatch = useDispatch();
  const { movieDatas, favorites } = useSelector((state) => state);
  const [style, setStyle] = useState("#b3286d");
  function handleClick(id) {
    favorites.forEach((item) => {
      if (item.id === id) {
        setStyle("#837a6b");
      } else {
        setStyle("#b3286d");
      }
    });

    dispatch(addMovieToFavoritesRequest(id));
  }
  return (
    <StyledRow>
      {movieDatas?.map((movie) => {
        return (
          !!movie?.poster_path && (
            <div key={movie.id}>
              <StyledCol>
                <Link to={`/movieDetail/${movie.id}`}>
                  <StyledImage
                    src={`${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`}
                    alt="moviePoster"
                  />
                </Link>
                <Icon
                  twoToneColor={style}
                  onClick={() => {
                    handleClick(movie.id);
                  }}
                />
                <div>{movie.title}</div>
              </StyledCol>
            </div>
          )
        );
      })}
    </StyledRow>
  );
}
