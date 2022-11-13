import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import CreateData from "../pages/create-data";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import ListData from "../pages/list-data";
import LayoutDashboard from "../widgets/LayoutDashboard";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <LayoutDashboard>
                  <Dashboard />
                </LayoutDashboard>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <LayoutDashboard>
                  <ListData />
                </LayoutDashboard>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <LayoutDashboard>
                  <CreateData />
                </LayoutDashboard>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/form/:IdData"
              element={
                <LayoutDashboard>
                  <CreateData />
                </LayoutDashboard>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
