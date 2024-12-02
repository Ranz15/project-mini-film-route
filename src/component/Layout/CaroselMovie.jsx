import { useContext } from "react";
import { MovieContext } from "../../Context/Main";

const CaroselMovie = () => {
  // useContext untuk menggunakan/mengambil state secara global
  const { movieList, setMovieList } = useContext(MovieContext);
  return (
    <>
      <div className="carousel rounded-box mx-3">
        {movieList.map((movie, i) => {
          return (
            <>
              <div className="carousel-item" key={i}>
                <a href="">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    width="200px"
                  />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CaroselMovie;
