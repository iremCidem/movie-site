import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledImage, StyledRow, StyledCol, Icon } from "./styled";
import { useSelector } from "react-redux";

export default function MoviePoster() {
  const [favorites, setFavorites] = useState([]);
  const { movieDatas } = useSelector((state) => state);
  function handleClick(id) {
    const items = JSON.parse(localStorage.getItem("user_favorites")) || [];
    const movie = movieDatas?.find((item) => item.id === id);
    const checkIfDataExist = favorites?.find((item) => item.id === id) || [];
    let newFavorites;
    if (!checkIfDataExist) {
      newFavorites = [...favorites, movie];
    } else {
      newFavorites = favorites?.filter((item) => item.id !== id);
    }
    setFavorites(newFavorites);
    items.push(newFavorites);
    localStorage.setItem("items", JSON.stringify(items));
    //  if (!favoritesInStorage) {
    //       localStorage.setItem("user_favorites", JSON.stringify(favorites));
    //     } else {
    //       const checkIfDataExist = favorites.find((item) => item.id === id);
    //       if (!checkIfDataExist) {
    //         setFavorites(movie);
    //         localStorage.setItem("user_favorites", JSON.stringify(favorites));
    //       } else {
    //         const newFavorites = favorites.filter((item) => item.id !== id);
    //         localStorage.setItem("user_favorites", JSON.stringify(newFavorites));
    //       }
    //       const newFavorites = [favorites, JSON.stringify(movie)];
    //       localStorage.setItem("user_favorites", JSON.stringify(newFavorites));
    //     }
  }
  return (
    <StyledRow>
      {movieDatas?.map((movie) => {
        return (
          movie?.poster_path !== null && (
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
