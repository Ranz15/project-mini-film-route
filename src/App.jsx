import { getMovies, searchMovie } from "./Controllers/API";
import { MainPage, MainProvider } from "./Context/Main";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./component/Layout/Login";
import { DetailMovie } from "./component/Layout/DetailMovie";

function App() {
  // function untuk handler search movie
  const search = async (e) => {
    if (e.length > 3) {
      const query = await searchMovie(e);
      setMovieList(query.results);
    }
  };

  return (
    <>
      <BrowserRouter>
        <MainProvider>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="detail/:id" element={<DetailMovie />} />
          </Routes>
        </MainProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
