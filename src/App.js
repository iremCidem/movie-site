import React from "react";
import Navside from "./components/NavSide/index";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Search from "./pages/search";
import UpComing from "./pages/upComing";
import Trends from "./pages/Trends";
import MovieDetail from "./pages/movieDetail";

export default function App() {
  return (
    <>
      <Navside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="search" element={<Search />} />
        <Route path="upComing" element={<UpComing />} />
        <Route path="trendMovies" element={<Trends />} />
        <Route path="movieDetail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}
//styled components js içerisine css yazmamızı sağlayan bir kütüphane.
