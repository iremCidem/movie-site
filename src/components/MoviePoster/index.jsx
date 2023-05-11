import React from "react";
import { Link } from "react-router-dom";
import { StyledImage, StyledRow, StyledCol, Icon } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToFavoritesRequest } from "../../store/slices/movieSlice";

export default function MoviePoster({ selected }) {
  const dispatch = useDispatch();
  const { movieDatas } = useSelector((state) => state);

  function handleClick(id) {
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
                  twoToneColor="#b3286d"
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
