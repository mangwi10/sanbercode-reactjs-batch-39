import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Dashboard = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { lengthData } = state;

  const { statusJobOpen } = handleFunction;

  useEffect(() => {
    statusJobOpen();
  }, [statusJobOpen]);

  return (
    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        Welcome, Admin
      </h1>
      <h2 className="text-md text-gray-400">
        Berikut data Lowongan Pekerjaan Hari ini
      </h2>
      <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
        <div className="flex items-center w-full md:w-1/2 space-x-4">
          <div className="w-1/2">
            <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p className="text-2xl text-black dark:text-white font-bold">
                {lengthData}
              </p>
              <p className="text-gray-400 text-sm">Job Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
