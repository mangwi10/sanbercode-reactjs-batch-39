import React, { useState, useEffect, useContext } from "react";
import axios, { Axios } from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { Link, useParams } from "react-router-dom";

const Tugas15Form = () => {
  const { IdData } = useParams();
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchstatus,
    currentId,
    setCurrentId,
  } = state;

  const {
    handleIndexScore,
    handleInput,
    handleSubmit,
    handleDelete,
    handleEditData,
    fetchdata,
  } = handleFunction;

  useEffect(() => {
    if (IdData !== undefined) {
      axios
        .get(
          `https://backendexample.sanbercloud.com/api/student-scores/${IdData}`
        )
        .then((res) => {
          let resultData = res.data;
          setInput({ ...resultData });
        });
    }
  }, []);

  return (
    <>
      <div className="container w-4/5 mx-auto mt-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Nama :{" "}
            </label>
            <input
              onChange={handleInput}
              value={input.name}
              name="name"
              type="text"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Mata Kuliah :{" "}
            </label>
            <input
              onChange={handleInput}
              value={input.course}
              name="course"
              type="text"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nilai :{" "}
            </label>
            <input
              onChange={handleInput}
              value={input.score}
              name="score"
              type="number"
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Tugas15Form;
