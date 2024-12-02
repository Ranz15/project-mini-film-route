import { useContext } from "react";
import Profile from "../../Asset/chase_canine_patrol_paw_patrol_icon_263864.png";
import Profile2 from "../../Asset/Profile_2.jpeg";
import { searchMovie } from "../../Controllers/API";
import LoginPage from "./Login";
import { MovieContext } from "../../Context/Main";
import { Link } from "react-router";

const NavbarMovie = () => {
  const { movieList, setMovieList } = useContext(MovieContext);
  const { isLogin, setIsLogin } = useContext(MovieContext);

  // function untuk handler search movie
  const search = async (e) => {
    if (e.length > 3) {
      const query = await searchMovie(e);
      setMovieList(query.results);
    }
  };
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content mb-2">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">RanzMovie</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={({ target }) => {
                search(target.value);
              }}
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Picture Profile"
                  //   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  src={Profile2}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/login" className="text-blue-300">
                  {!isLogin ? "Login" : "Logout"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMovie;
