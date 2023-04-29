import React, { useEffect, useState } from "react";
import MainPart from "../styledComponets/MainPart";
import MoviePoster from "../components/MoviePoster/index";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites } from "../store/store";

export default function Favorites() {
  // useEffect(() => {
  //   const movieDatas = JSON.parse(localStorage.getItem("user_favorites"));
  //   console.log(movieDatas);
  // }, []);
  const favoritesInStorage = useSelector((state) => state.favorites.value);
  console.log(favoritesInStorage);
  return (
    <MainPart>
      <h2>Your Favorites</h2>
      {/* {favoriteMovies && <MoviePoster movieData={favoriteMovies} />} */}
    </MainPart>
  );
}
