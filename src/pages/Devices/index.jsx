// src/components/Dashboard.js
import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "../../styles/Dashboard.scss";

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
          <h2>Akash</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
