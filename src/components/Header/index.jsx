import React, { useContext } from "react";
import Icons from "../../constants/Icons";
import { ThemeContext } from "../../context/ThemeContext";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`header hidden md:flex items-center justify-between ${
          isDarkMode ? " text-white" : " text-black"
        }`}
      >
        {/* Left Section: Menu Icon and Title */}
        <div className="flex items-center">
          <a href="#">
            <HiMenuAlt2 className="h-6 w-6" />
          </a>
          <div className="title ml-2 text-lg font-semibold">Dashboard</div>
        </div>

        {/* Right Section: User Info and Notifications */}
        <div className="flex items-center space-x-4">
          {/* Toggle Theme Button */}
          <button
            onClick={toggleTheme}
            className={`toggle-theme rounded-full p-2 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {isDarkMode ? (
              <i className="fas fa-sun"></i> // Sun icon for light mode
            ) : (
              <i className="fas fa-moon"></i> // Moon icon for dark mode
            )}
          </button>

          {/* User Info and Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col">
              <div className="name text-base font-semibold">
                Smruti Ranjan Nayak
              </div>
              <div className="email text-sm text-gray-500">
                sm@uti@gmail.com
              </div>
            </div>

            {/* User Profile Picture */}
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
              <img
                src={Icons.Avatar}
                alt="User Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Notification Icon */}
          <div className="hidden md:flex items-center relative">
            <div className="flex items-center justify-center p-2 rounded-full bg-white border border-gray-300">
              <img
                src={Icons.Desktop}
                alt="Notification"
                className="notification-icon w-[24px] h-[24px] object-contain"
              />
              <span className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#6DC489] rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header (Part 1: Logo, Profile, and Notifications) */}
      <div
        className={`header fixed top-0 left-0 w-full z-50 flex md:hidden items-center justify-between p-4 bg-white shadow-lg h-16 ${
          isDarkMode ? " text-white bg-green-900" : " text-black bg-white"
        }`}
      >
        {/* Logo */}
        <div className="logo flex items-center">
          <img
            src={Icons.Logo} // Your company logo here
            alt="Logo"
            className="h-8 w-8"
          />
        </div>

        {/* User Info and Notifications */}
        <div className="flex items-center space-x-4">
          {/* User Profile Picture */}
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
            <img
              src={Icons.Avatar}
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Notification Icon */}
          <div className="flex items-center relative">
            <div className="flex items-center justify-center p-2 rounded-full bg-white border border-gray-300">
              <img
                src={Icons.Desktop}
                alt="Notification"
                className="notification-icon w-[24px] h-[24px] object-contain"
              />
              <span className="absolute top-0 right-0 w-[14px] h-[14px] bg-[#6DC489] rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header (Part 2: Menu and Dashboard Text) */}
      <div
        className={`header flex md:hidden items-center justify-between mt-[70px]  ${
          isDarkMode ? " text-white" : " text-black"
        }`} // Adjust the margin to create spacing between the fixed header and content
      >
        {/* Left Section: Menu Icon */}
        <div className="flex gap-5">
          <a href="#">
            <HiMenuAlt2 className="h-6 w-6" />
          </a>

          <div className="title text-lg font-semibold">Dashboard</div>
        </div>
      </div>
    </>
  );
};

export default Header;
