import React from "react";

const DeviceCard = ({ icon1: Icon1, icon2: Icon2, value, label }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col justify-between w-full h-[200px]">
      {/* Icons at the top */}
      <div className="flex justify-between mb-4">
        {Icon1 && <Icon1 className="w-8 h-8 text-white" />}
        {Icon2 && <Icon2 className="w-8 h-8 text-white" />}
      </div>

      <div className="flex flex-col items-start">
        <div className="text-5xl font-semibold text-gray-50 flex items-baseline">
          {value}
          <span className="text-lg text-gray-200 ml-2 whitespace-normal word-break: break-all;">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
