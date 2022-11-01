import React, { useState, useEffect } from "react";
import axios from "axios";

const Tugas11 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
  }, []);

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

  console.log(data);

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
                    <td className="py-4 px-6">{handleIndexScore(res.score)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tugas11;
