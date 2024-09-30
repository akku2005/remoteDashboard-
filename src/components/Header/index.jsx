import React from "react";
import Icons from "../../constants/Icons";

const Header = () => {
  return (
    <div className="header flex items-center justify-between ">
      {/* Left Section: Menu Icon and Title */}
      <div className="flex items-center">
        <a href="#">
          <img
            src={Icons.Content}
            alt="Menu Icon"
            className="menu-icon w-[32px] h-[32px] text-white"
          />
        </a>
        <div className="title ml-2 text-lg font-semibold text-white">
          Dashboard
        </div>
      </div>

      {/* Right Section: User Info, Avatar, and Notifications */}
      <div className="flex items-center space-x-6">
        {/* User Info and Avatar on larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex flex-col">
            <div className="name text-base font-semibold text-white">
              Smruti Ranjan Nayak
            </div>
            <div className="email text-sm text-gray-300">sm@uti@gmail.com</div>
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

        {/* Show User Profile Picture on Mobile */}
        <div className="md:hidden flex items-center">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src={Icons.Avatar}
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
