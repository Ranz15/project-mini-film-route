import { useContext } from "react";
import { MovieContext } from "../../Context/Main";
import NavbarMovie from "./Navbar";
import { Link } from "react-router";

const FavoritPage = () => {
  // useContext untuk menggunakan/mengambil state secara global
  const { movieList, setMovieList, favoritMovie, setFavoritMovie } =
    useContext(MovieContext);

  console.log(favoritMovie);

  return (
    <>
      <NavbarMovie />
      <div className="flex justify-center items-center mb-2">
        <h1 className="text-[50px] font-bold underline">Your Favorit Movie</h1>
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center mb-5">
        {favoritMovie.map((movie) => {
          return (
            <div
              className="card card-side bg-base-100 shadow-xl mx-3 w-[520px]"
              key={movie.id}
            >
              <figure>
                <Link to={`detail/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.path}`}
                    alt="Movie"
                  />
                </Link>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>

                <p>Click the button to Detail on Jetflix app.</p>
                <p>Release Movie : {movie.date}</p>
                <p>Vote Movie : {movie.vote}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FavoritPage;
