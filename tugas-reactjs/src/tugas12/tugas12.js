import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas12 = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: 0,
  });
  const [fetchStatus, setFetchstatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data]);
        })
        .catch((error) => {});

      setFetchstatus(false);
    }
  }, [fetchStatus, setFetchstatus]);

  const handleIndexScore = (score) => {
    if (score >= 80) {
      return "A";
    } else if (score >= 70 && score < 80) {
      return "B";
    } else if (score >= 60 && score < 70) {
      return "C";
    } else if (score >= 50 && score < 60) {
      return "D";
    } else {
      return "E";
    }
  };

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(input)
    let { name, course, score } = input;

    axios
      .post("https://backendexample.sanbercloud.com/api/student-scores", {
        name,
        course,
        score,
      })
      .then((res) => {
        console.log(res);
        setFetchstatus(true);
      });

    setInput({
      name: "",
      course: "",
      score: 0,
    });
  };

  return (
    <>
      <div className="w-4/5 overflow-x-auto relative shadow-md mx-auto my-6 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
          <thead className="text-xs text-white uppercase bg-violet-500">
            <tr>
              <th scope="col" className="py-3 px-6">
                NO
              </th>
              <th scope="col" className="py-3 px-6">
                NAMA
              </th>
              <th scope="col" className="py-3 px-6">
                MATA KULIAH
              </th>
              <th scope="col" className="py-3 px-6">
                NILAI
              </th>
              <th scope="col" className="py-3 px-6">
                INDEKS NILAI
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {data !== null &&
              data.map((res, index) => {
                return (
                  <>
                    <tr className="bg-white border-b">
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {index + 1}
                      </th>
                      <td className="py-4 px-6">{res.name}</td>
                      <td className="py-4 px-6">{res.course}</td>
                      <td className="py-4 px-6">{res.score}</td>
                      <td className="py-4 px-6">
                        {handleIndexScore(res.score)}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>

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

export default Tugas12;
