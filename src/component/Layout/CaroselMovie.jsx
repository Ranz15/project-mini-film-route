import { useContext } from "react";
import { MovieContext } from "../../Context/Main";
import { Link } from "react-router";

const CaroselMovie = () => {
  // useContext untuk menggunakan/mengambil state secara global
  const { movieList, setMovieList } = useContext(MovieContext);
  return (
    <>
      <div className="carousel rounded-box mx-3 my-2">
        {movieList.map((movie, i) => {
          return (
            <>
              <div className="carousel-item" key={i}>
                <Link to={`detail/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    width="200px"
                  />
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CaroselMovie;
