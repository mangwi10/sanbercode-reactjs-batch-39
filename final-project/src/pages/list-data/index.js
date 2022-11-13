import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ListData = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { dataJob, setDataJob, fetchStatus, setFetchstatus } = state;
  const { handleDelete, handleEditDataJob, fetchDataJob } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchDataJob();
      setFetchstatus(false);
    }
  }, [fetchStatus, setFetchstatus, fetchDataJob]);

  return (
    <>
      <div className="container">
        <div className="w-full shadow-md my-6">
          <div className="overflow-x-auto relative rounded-lg my-6">
            <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400 mx-auto">
              <thead className="text-xs text-white uppercase bg-violet-500">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    NO
                  </th>
                  <th scope="col" className="py-3 px-6">
                    JUDUL PEKERJAAN
                  </th>
                  <th scope="col" className="py-3 px-6">
                    DESKRIPSI
                  </th>
                  <th scope="col" className="py-3 px-6">
                    KUALIFIKASI
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TIPE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TENURE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    STATUS
                  </th>
                  <th scope="col" className="py-3 px-6">
                    NAMA PERUSAHAAN
                  </th>
                  {/* <th scope="col" className="py-3 px-6">
                    GAMBAR PERUSAHAAN
                  </th> */}
                  <th scope="col" className="py-3 px-6">
                    KOTA
                  </th>
                  <th scope="col" className="py-3 px-6">
                    MIN GAJI
                  </th>
                  <th scope="col" className="py-3 px-6">
                    MAX GAJI
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {dataJob !== null &&
                  dataJob.map((res, index) => {
                    return (
                      <>
                        <tr key={res.id} className="bg-white border-b">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {index + 1}
                          </th>
                          <td className="py-4 px-6">{res.title}</td>
                          <td className="py-4 px-6">
                            <p className="truncate w-20">
                              {res.job_description}
                            </p>
                          </td>
                          <td className="py-4 px-6">
                            <p className="truncate w-20">
                              {res.job_qualification}
                            </p>
                          </td>
                          <td className="py-4 px-6">{res.job_type}</td>
                          <td className="py-4 px-6">{res.job_tenure}</td>
                          <td className="py-4 px-6">{res.job_status}</td>
                          <td className="py-4 px-6">{res.company_name}</td>
                          {/* <td className="py-4 px-6">{res.company_image_url}</td> */}
                          <td className="py-4 px-6">{res.company_city}</td>
                          <td className="py-4 px-6">{res.salary_min}</td>
                          <td className="py-4 px-6">{res.salary_max}</td>
                          <td className="py-4 px-6">
                            <button
                              onClick={handleEditDataJob}
                              value={res.id}
                              type="button"
                              className="mx-0.5 w-min py-2 px-3 font-medium text-center text-xs text-white border border-gray-400 bg-green-400 rounded-lg hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                              Edit
                            </button>
                            <button
                              onClick={handleDelete}
                              value={res.id}
                              type="button"
                              className="mx-0.5 w-min py-2 px-3 font-medium text-center text-xs text-white bg-red-600 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                <tr>
                  <td>
                    {dataJob === null || dataJob.length === 0
                      ? "Tidak Ada Data"
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListData;
