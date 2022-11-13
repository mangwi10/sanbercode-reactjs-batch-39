import React from "react";
import Sidebar from "../components/Sidebar";

const LayoutDashboard = (props) => {
  return (
    <>
      <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full md:space-y-4">
            <header className="w-full h-16 px-7 z-40 flex items-center justify-between bg-red-400">
              <p>Selamat Datang, Admin</p>
            </header>
            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
              {props.children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutDashboard;
