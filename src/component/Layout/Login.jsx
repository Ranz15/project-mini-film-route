import { useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router";
import { MovieContext } from "../../Context/Main";

const LoginPage = () => {
  const form = useRef();
  const Navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(MovieContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const dataEmail = form.current.email.value;
    const dataPassword = form.current.password.value;

    if (dataEmail === "test@gmail.com" && dataPassword === "test123") {
      alert("Login Success");
      Navigate("/");
    } else {
      alert("Login Gagal");
      Navigate("/login");
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Sekarang!</h1>
            <p className="py-6">
              untuk mendapatkan pengalaman terbaik saat menonton film bajakan,
              yakali 2024 masih yang bayar....
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" ref={form} onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
