import React from "react";
import Icons from "../../constants/Icons";

const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      {/* Left Section: Menu Icon and Title */}
      <div className="flex items-center">
        <img
          src={Icons.Content}
          alt="Menu Icon"
          className="menu-icon w-[32px] h-[32px] text-white"
        />
        <div className="title ml-2 text-lg font-semibold">Dashboard</div>
      </div>

      {/* Right Section: User Info, Avatar, and Notifications */}
      <div className="flex items-center space-x-6">
        {/* User Info and Avatar */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <div className="name text-base font-semibold">
              Smruti Ranjan Nayak
            </div>
            <div className="email text-sm text-white">sm@uti@gmail.com</div>
          </div>

          {/* User Profile Picture */}
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <img
              src={Icons.Avatar}
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Notification Icon */}
        <div className="relative w-[50px] h-[50px] bg-white border border-gray-300 flex items-center justify-center rounded-full p-[10px]">
          <img
            src={Icons.Desktop}
            alt="Notification"
            className="notification-icon w-[24px] h-[24px] object-contain"
          />
          <span className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#6DC489] rounded-full border-2 border-white"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
