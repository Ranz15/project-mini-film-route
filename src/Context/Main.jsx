import { createContext, useState } from "react";
import NavbarMovie from "../component/Layout/Navbar";
import CaroselMovie from "../component/Layout/CaroselMovie";
import CardMovieList from "../component/Layout/CardMovieList";
import LoginPage from "../component/Layout/Login";

export const MovieContext = createContext("");

export const MainPage = () => {
  // React Hooks
  // useState untuk menyimpan data movies sementara
  const [movieList, setMovieList] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [infoMovie, setInfoMovie] = useState([]);

  return (
    <>
      <MovieContext.Provider
        value={{
          movieList,
          setMovieList,
          isLogin,
          setIsLogin,
          infoMovie,
          setInfoMovie,
        }}
      >
        <NavbarMovie />
        <CaroselMovie />
        <CardMovieList />
      </MovieContext.Provider>
    </>
  );
};