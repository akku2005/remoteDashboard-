import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // Menu icon
import { BellIcon } from "@heroicons/react/24/outline"; // Notification icon

const Header = () => {
  return (
    <div className="header flex justify-between items-center p-3 ">
      <div className="header-content flex items-center">
        <Bars3Icon className="menu-icon w-8 h-8" /> {/* Menu icon */}
        <div className="title ml-2 text-lg">Dashboard</div>
      </div>
      <div className="user-info flex items-center">
        <div className="flex flex-col mr-4">
          <div className="name font-bold">Smruti Ranjan Nayak</div>
          <div className="email text-sm">sm@uti@gmail.com</div>
        </div>
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="rounded-full w-10 h-10"
        />
        <BellIcon className="notification-icon w-8 h-8 ml-2" />{" "}
        {/* Notification icon */}
      </div>
    </div>
  );
};

export default Header;
