import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    googleSignIn(provider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
                <button
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
                  }}
                  className="btn text-white "
                >
                  LOGIN
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="mt-4 btn btn-outline"
                >
                  {" "}
                  <FcGoogle />
                  LOGIN WITH GOOGLE
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-sm font-medium mb-4">
              Do Not Have An Account?{" "}
              <Link className=" font-bold text-gray-700 " to="/signup">
                Register{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
