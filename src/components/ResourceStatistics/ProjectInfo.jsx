// MobileProjectInfo.js
import React from "react";
import { FaWifi } from "react-icons/fa";

const MobileProjectInfo = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* First Project Box */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col justify-between w-full h-[150px] gap-4 border border-gray-100 border-opacity-30">
        <div className="flex items-center mb-2 gap-4">
          <FaWifi className="h-[20px] w-[20px] text-[rgb(86,238,104)]" />
          <h2 className="text-lg">My Project</h2>
        </div>
        <p className="text-sm mb-4">Creation Time: 2024-08-22 17:59:59</p>
        <div className="flex justify-between">
          <div className="text-center flex items-center gap-4">
            <p className="text-2xl font-bold">01</p>
            <p className="text-sm">AP</p>
          </div>
          <div className="text-center flex items-center gap-4">
            <p className="text-2xl font-bold">01</p>
            <p className="text-sm">Gateway</p>
          </div>
        </div>
      </div>

      {/* Second Project Box */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full h-[150px] gap-4 border border-gray-100 border-opacity-30 flex flex-col justify-center items-center">
        <div className="text-center flex justify-center">
          <FaWifi className="text-xl mb-2 mx-auto" />
        </div>
        <h2 className="text-lg font-semibold">No Project Info</h2>
      </div>
    </div>
  );
};

export default MobileProjectInfo;
