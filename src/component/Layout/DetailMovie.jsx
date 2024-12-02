import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { detailMovie } from "../../Controllers/API";
import { MovieContext } from "../../Context/Main";

export const DetailMovie = () => {
  const { infoMovie, setInfoMovie } = useContext(MovieContext);
  // const params = useParams();

  //   console.log(params.id);

  const getDetailMovie = async () => {
    const results = await detailMovie();
    return results;
  };

  useEffect(() => {
    const result = getDetailMovie();
    // setInfoMovie(result);

    console.log(result);
  }, []);

  return (
    <>
      <h1>Ini Halaman Detail </h1> 1241982
    </>
  );
};
