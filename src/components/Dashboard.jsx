// src/components/Dashboard.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "../styles/Dashboard.scss";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  // Use ThemeContext
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div className={`dashboard-container ${isDarkMode ? "dark" : "light"}`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Header */}
        <Header />

        {/* Statistics */}
        <div className="statistics">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
