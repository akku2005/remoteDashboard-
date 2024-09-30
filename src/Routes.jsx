import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/PageNotFound";
import Dashboard from "./components/Dashboard";
import Devices from "./pages/Devices"; // Import Devices component

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "dashboard", element: <Dashboard /> },
    { path: "devices", element: <Devices /> }, // Add route for Devices
  ]);
  return element;
};

export default ProjectRoutes;
