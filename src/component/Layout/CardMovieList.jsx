import { useContext, useEffect } from "react";
import { getMovies } from "../../Controllers/API";
import { MovieContext } from "../../Context/Main";
import { Link } from "react-router";

const CardMovieList = () => {
  // useContext untuk menggunakan/mengambil state secara global
  const { movieList, setMovieList } = useContext(MovieContext);

  // useEffect untuk action fetching data sesudah render page
  useEffect(() => {
    getMovies().then((result) => {
      setMovieList(result);
    });
  }, []);

  // console.log({ Movie: movieList });

  // handleFavorit
  const handleFavorit = () => {
    console.log("favorit cuy");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl bg-slate-400 ">Daftar Film Box Office</h1>
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-4">
        {movieList.map((movie, i) => {
          return (
            <>
              <div className="" key={movie.id}>
                <div className="card card-side bg-base-100 shadow-xl mx-3 w-[520px]">
                  <figure>
                    <Link to={`detail/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="Movie"
                      />
                    </Link>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>

                    <p>Click the button to Detail on Jetflix app.</p>
                    <p>Release Movie : {movie.release_date}</p>
                    <p>Vote Movie : {movie.vote_average}</p>
                    <div className="card-actions justify-end">
                      <Link to={`detail/${movie.id}`}>
                        <button className="btn btn-primary">Detail</button>
                      </Link>
                      <button
                        className="btn btn-primary"
                        onClick={handleFavorit}
                      >
                        Favorit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardMovieList;
