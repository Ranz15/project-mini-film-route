import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { detailMovie } from "../../Controllers/API";
import { MovieContext } from "../../Context/Main";
import NavbarMovie from "./Navbar";

export const DetailMovie = () => {
  const { infoMovie, setInfoMovie } = useContext(MovieContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await detailMovie(id);
        setInfoMovie(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    // Call the async function
    fetchMovie();
  }, []);

  console.log({ Info_Movie: infoMovie });

  return (
    <>
      <NavbarMovie />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500/${infoMovie.poster_path}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{infoMovie.title}</h1>
            <p className="py-6">{infoMovie.overview}</p>
            <h2 className="py-3 font-bold">
              Tagline Movie : {infoMovie.tagline}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
