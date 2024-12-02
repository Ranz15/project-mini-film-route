import axios from "axios";

// inisialisasi .env
const baseURL = import.meta.env.VITE_BASEURL;
const APIKEY = import.meta.env.VITE_APIKEY;

// fetching API themoviedb menggunakan axios (getMovies dan searchMovie)
const getMovies = async () => {
  const movies = await axios.get(`${baseURL}/movie/popular?api_key=${APIKEY}`);
  return movies.data.results;
};

const searchMovie = async (e) => {
  const search = await axios.get(
    `${baseURL}/search/movie?query=${e}&api_key=${APIKEY}`
  );
  return search.data;
};

const detailMovie = async (e) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/1241982",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGFjMjUxMTM2YWJmNDc0N2Y5MmJlYzJlNmExN2NlMSIsIm5iZiI6MTczMjQ2MTQ2MS4wNDEsInN1YiI6IjY3NDM0Mzk1NGMzODIyNzI2ZjMxY2JiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXVGVrhKigfYcB5TrfSqyrEzep-0VFMPI39M85yDy-4",
    },
  };

  const detailData = await axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return detailData;
};

export { getMovies, searchMovie, detailMovie };
