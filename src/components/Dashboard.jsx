// src/components/Dashboard.js
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
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
