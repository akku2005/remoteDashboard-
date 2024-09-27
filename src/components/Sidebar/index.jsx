import React, { useState } from "react";
import {
  HomeIcon,
  BellIcon,
  ShieldCheckIcon,
  WifiIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import "../../styles/Sidebar.scss";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Present"); // Set the active page

  const handleIconClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="sidebar">
      {/* Top Section: Logo */}
      <div className="logo font-xl">
        <h1 className="text-3xl font-bold text-gray-300">Wis</h1>{" "}
        {/* Replaced image with text */}
      </div>

      {/* Horizontal line under the logo */}
      <div className="horizontal-line" />

      {/* Icons */}
      <div className="icons">
        <div
          className={`icon-container ${
            activePage === "Present" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Present")}
        >
          <HomeIcon className="icon" />
        </div>
        <div
          className={`icon-container ${
            activePage === "Devices" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Devices")}
        >
          <WifiIcon className="icon" />
        </div>
        <div
          className={`icon-container ${
            activePage === "Notifications" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Notifications")}
        >
          <BellIcon className="icon" />
        </div>
        <div
          className={`icon-container ${
            activePage === "Security" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Security")}
        >
          <ShieldCheckIcon className="icon" />
        </div>
      </div>

      {/* Bottom Section: Settings */}
      <div className="settings">
        <CogIcon className="icon" onClick={() => handleIconClick("Settings")} />
      </div>
    </div>
  );
};

export default Sidebar;
