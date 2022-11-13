import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container w-full mt-10">
      <label className="flex items-center pl-2.5 mb-5">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Ke Halaman Dashboard
        </span>
      </label>
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        to="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  );
};

export default Home;
