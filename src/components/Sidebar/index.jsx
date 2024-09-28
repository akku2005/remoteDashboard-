import React, { useState } from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri"; // Icon for Dashboard/Home
import { IoWifiOutline, IoSettingsOutline } from "react-icons/io5"; // Icons for Wifi/Devices and Settings
import { FaRegFolder } from "react-icons/fa"; // Icon for Notifications
import { MdOutlineSecurity } from "react-icons/md"; // Icon for Security
import { CiLock } from "react-icons/ci"; // Icon for Lock
import { TbUsers } from "react-icons/tb"; // Icon for Users
import "../../styles/Sidebar.scss"; // Assuming you have styles defined in Sidebar.scss
import Icons from "../../constants/Icons"; // Importing your custom logo

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Present");

  const handleIconClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="sidebar flex flex-col justify-between h-full p-4">
      {/* Top Section: Logo */}
      <div className="logo mb-4">
        <img src={Icons.Logo} alt="Wis" className="w-16 h-16" />
      </div>

      {/* Horizontal line under the logo */}
      <div className="horizontal-line border-t-2 border-gray-300 my-4" />

      {/* Icons Section */}
      <div className="icons flex-grow flex flex-col">
        <div
          className={`icon-container ${
            activePage === "Present" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Present")}
        >
          <RiDashboardHorizontalLine className="icon w-6 h-6 text-white" />
        </div>
        <div
          className={`icon-container ${
            activePage === "Devices" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Devices")}
        >
          <IoWifiOutline className="icon w-6 h-6 text-white" />
        </div>
        <div
          className={`icon-container ${
            activePage === "Notifications" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Notifications")}
        >
          <FaRegFolder className="icon w-6 h-6 text-white" />
        </div>
        <div
          className={`icon-container ${
            activePage === "Security" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Security")}
        >
          <MdOutlineSecurity className="icon w-6 h-6 text-white" />
        </div>

        {/* New Icons: Lock and Users */}
        <div
          className={`icon-container ${activePage === "Lock" ? "active" : ""}`}
          onClick={() => handleIconClick("Lock")}
        >
          <CiLock className="icon w-6 h-6 text-white" />
        </div>
        <div
          className={`icon-container ${activePage === "Users" ? "active" : ""}`}
          onClick={() => handleIconClick("Users")}
        >
          <TbUsers className="icon w-6 h-6 text-white" />
        </div>
      </div>

      {/* Bottom Section: Settings */}
      <div className="settings mt-4">
        <div
          className={`icon-container ${
            activePage === "Settings" ? "active" : ""
          }`}
          onClick={() => handleIconClick("Settings")}
        >
          <IoSettingsOutline className="icon w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
