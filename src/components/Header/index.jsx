import React, { useState } from "react";
import { Link, NavLink, useResolvedPath, useMatch } from "react-router-dom";

const Header = ({ isLight, setIsLight }) => {
  const sectionArr = ["Home", "Projects", "Skills", "About"];

  const [show, setShow] = useState(false);

  const CustomLink = ({ to }) => {
    let resolve = useResolvedPath(to);
    let match = useMatch({ path: resolve.pathname, end: true });
    console.log(match ? match : "no");
    return (
      <Link to={`/${to}`}>
        <p
          className={`px-3 py-1 rounded ${
            match
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-500 hover:text-white"
          }`}
        >
          {to}
        </p>
      </Link>
    );
  };

  return (
    <div
      className={`w-full border-b  py-5 px-3 fixed top-0 left-0 z-50 ${
        isLight
          ? "bg-white border-gray-200 text-gray-900"
          : "bg-gray-800 text-white border-gray-700"
      }`}
    >
      <div
        className={`mx-auto w-full lg:max-w-6xl md:max-w-3xl flex flex-row justify-between items-center`}
      >
        <NavLink to="/">
          <h1 className="uppercase  font-bold text-xl">Duc</h1>
        </NavLink>

        <div
          className={`md:flex ${
            show ? "block" : "hidden"
          } md:h-auto h-screen md:p-0 p-5 md:flex-row md:static md:bg-transparent ${
            isLight ? "bg-white" : "bg-gray-700"
          } shadow-md md:shadow-none md:w-auto w-56 justify-start items-center text-sm fixed top-0 right-0`}
        >
          <div className="flex mb-5 md:hidden flex-row justify-end items-end">
            <svg
              onClick={() => setShow(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {sectionArr.map((item) => (
            <div
              className={`mr-10 md:mb-0 mb-10 cursor-pointer relative block`}
              key={item}
            >
              <CustomLink to={item}></CustomLink>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-end items-center">
          <span
            className={`cursor-pointer border p-1 rounded-lg border-solid ${
              isLight ? "border-gray-200" : "border-gray-700"
            }`}
            onClick={() => setIsLight(!isLight)}
          >
            {isLight ? (
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
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
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
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 md:hidden cursor-pointer block w-5 ml-3"
            onClick={() => setShow(true)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
