import React, { useState, useEffect } from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { IoWifiOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi"; // Icon for opening sidebar
import "../../styles/Sidebar.scss";
import Icons from "../../constants/Icons"; // Assuming you have a logo in this file

const Sidebar = () => {
  const [activePage, setActivePage] = useState("Present");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIconClick = (page) => {
    setActivePage(page);
    setIsSidebarOpen(false); // Close sidebar on icon click
  };

  // Handle outside click to close sidebar
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isSidebarOpen &&
        !document.querySelector(".sidebar").contains(e.target) &&
        !document.querySelector(".hamburger-icon").contains(e.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="sidebar-container relative">
      {/* Hamburger Menu Icon for Mobile */}
      <div
        className="hamburger-icon md:hidden fixed mt-[120px] left-1 z-50 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-2"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <GiHamburgerMenu className="icon w-6 h-6 text-white" />
      </div>

      <div
        className={`sidebar ${
          isSidebarOpen ? "open" : ""
        } flex flex-col justify-between h-full p-4`}
      >
        {/* Top Section: Logo */}
        <div className="logo mb-4">
          <img src={Icons.Logo} alt="Wis" className="w-16 h-16" />
        </div>

        {/* Horizontal line under the logo */}
        <div className="horizontal-line border-t-2 border-gray-300 my-5 mb-3 justify-center items-center" />

        {/* Icons Section */}
        <div className="icons flex-grow flex flex-col items-center">
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
            className={`icon-container ${
              activePage === "Lock" ? "active" : ""
            }`}
            onClick={() => handleIconClick("Lock")}
          >
            <CiLock className="icon w-6 h-6 text-white" />
          </div>
          <div
            className={`icon-container ${
              activePage === "Users" ? "active" : ""
            }`}
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
    </div>
  );
};

export default Sidebar;
