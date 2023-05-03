import React from "react";
import MainPart from "../../styledComponets/MainPart";
import { useSelector, useDispatch } from "react-redux";
import { addMovieToFavoritesRequest } from "../../store/slices/movieSlice";
import { Link } from "react-router-dom";
import { Header } from "../../styledComponets/Header";
import { StyledImage, StyledRow, StyledCol, Icon } from "./style";

export default function Favorites() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  function handleClick(id) {
    dispatch(addMovieToFavoritesRequest(id));
  }
  return (
    <MainPart>
      <Header>Your Favorites</Header>
      <StyledRow>
        {favorites?.map((movie) => {
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
                    twoToneColor="#837a6b"
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
    </MainPart>
  );
}
