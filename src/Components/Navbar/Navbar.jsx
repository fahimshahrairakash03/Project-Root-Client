import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > +90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const menuItem = (
    <>
      <li>
        <Link
          className={
            color ? "font-medium text-white" : "font-medium text-gray-500"
          }
          to="/"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          className={
            color ? "font-medium text-white" : "font-medium text-gray-500"
          }
          to="/services"
        >
          SERVICES
        </Link>
      </li>
      <li>
        <Link
          className={
            color ? "font-medium text-white" : "font-medium text-gray-500"
          }
          to="/myreviews"
        >
          MY REVIEWS
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link
              className={
                color ? "font-medium text-white" : "font-medium text-gray-500"
              }
              to="/addService"
            >
              ADD SERVICE
            </Link>
          </li>
          <li>
            <Link
              className={
                color ? "font-medium text-white" : "font-medium text-gray-500"
              }
            >
              {user?.email.slice(0, 3) + "..@"}
            </Link>
          </li>
          <button
            onClick={handleSignOut}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
            }}
            className="btn text-white "
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link
              className={
                color ? "font-medium text-white" : "font-medium text-gray-500"
              }
              to="/login"
            >
              LOGIN
            </Link>
          </li>
          <li>
            <Link
              className={
                color ? "font-medium text-white" : "font-medium text-gray-500"
              }
              to="/signup"
            >
              REGISTER
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div
        className={
          color ? "navbar fixed z-10 bg-black" : "navbar fixed z-10 bg-base-100"
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <img
            className="w-10"
            src="https://project-roots-1f819.web.app/static/media/logo.3780d97d85dd3b9362f6.jpg"
            alt=""
          />
          <a
            className={
              color
                ? "btn btn-ghost text-white text-xl"
                : "btn btn-ghost text-xl"
            }
          >
            ROOTS
          </a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
