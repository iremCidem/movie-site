import React from "react";
import MainPart from "../styledComponets/MainPart";
import { useSelector, useDispatch } from "react-redux";
import { addMovieToFavoritesRequest } from "../store/slices/movieSlice";
import styled from "styled-components";
import { HeartTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Header } from "../styledComponets/Header";

const StyledImage = styled.img`
  max-width: 190px;
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 60px));
  gap: 10px;
  justify-content: center;
`;
const StyledCol = styled.div`
  text-align: center;
  position: relative;
`;
const Icon = styled(HeartTwoTone)`
  position: absolute;
  top: 4%;
  left: 80%;
  border: 1px solid white;
  padding: 2px;
  border-radius: 50%;
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(2.2);
  }
  background-color: #837a6b;
`;
export default function Favorites() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  function handleClick(id) {
    dispatch(addMovieToFavoritesRequest(id));
  }
  console.log(favorites);
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
      </StyledRow>{" "}
    </MainPart>
  );
}
