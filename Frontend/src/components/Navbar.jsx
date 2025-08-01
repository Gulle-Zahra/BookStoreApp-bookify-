import React from "react";
import { useState, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider.jsx";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
   
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm fixed top-0  dark:bg-slate-800 dark:text-white px-0">
        <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 dark:bg-slate-800 dark:text-white px-0">
          <div className="navbar-start dark:bg-slate-800 dark:text-white">
            <div className="dropdown dark:bg-slate-800 dark:text-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden dark:bg-slate-800 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:bg-slate-800 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark:bg-slate-800 dark:text-white"
              >
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/course">
                  <li> Courses</li>
                </a>
                <a href="/contact">
                  <li>Contact</li>
                </a>
                <a href="/about">
                  <li>About</li>
                </a>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl font-bold">Bookify</a>
          </div>
          <div className="navbar-center hidden lg:flex gap-x-4 ">
            <ul className="menu menu-horizontal px-7  gap-x-4 font-bold">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/course">
                <li> Courses</li>
              </a>
              <a href="/contact">
                <li>Contact</li>
              </a>
              <a href="/about">
                <li>About</li>
              </a>
            </ul>
          </div>
          <div className="dark:bg-slate-800 dark:text-white">
            <input
              type="text"
              placeholder="Search Here"
              className="input dark:bg-slate-800 dark:text-white"
            />
          </div>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {authUser ? (
            <Logout />
          ) : (
            <div className="navbar-end">
              <a
                className="btn bg-black text-white "
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
