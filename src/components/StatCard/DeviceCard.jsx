import React from "react";

const DeviceCard = ({
  icon1: Icon1,
  icon2: Icon2,
  value,
  label,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col justify-between w-full h-[200px] gap-4 box-border border border-gray-400">
      {/* Icons and Button at the top */}
      <div className="flex justify-between mb-4">
        {Icon1 && <Icon1 className="w-8 h-8 text-white" />}
        {Icon2 && <Icon2 className="w-8 h-8 text-white" />}
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-[#56EE6830] text-[#56EE68] font-medium rounded-full border border-[#56EE68] opacity-100 w-[75px] h-[37px] flex justify-center items-center"
          >
            {buttonText}
          </button>
        )}
      </div>

      {/* Value and Label Section */}
      <div className="flex flex-col items-start">
        <div className="flex items-baseline">
          <div className="font-semibold text-[64px] leading-none text-white">
            {value}
          </div>
          <span className="text-[24px] leading-[28.8px] font-medium text-gray-300 ml-2">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;
