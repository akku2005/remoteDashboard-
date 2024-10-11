// PendingInfoBox.js
import React from "react";

const PendingInfoBox = ({ count, label }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex flex-col justify-between">
      {" "}
      {/* Adjusted height */}
      <div className="flex justify-between items-center w-full px-4 gap-2 p-5">
        <div className="text-4xl font-bold">{count}</div>{" "}
        {/* Adjusted font size */}
        <div className="text-lg md:text-2xl font-[500]">{label}</div>{" "}
        {/* Adjusted font size */}
      </div>
      <div className="flex-grow flex flex-col items-end justify-end w-full">
        <button className="bg-[#56EE6830] text-[#56EE68] font-medium rounded-full border border-[#56EE68] opacity-100 w-[120px] h-[30px] flex justify-center items-center p-[8px]">
          {" "}
          {/* Adjusted button size */}
          Dispose
        </button>
      </div>
    </div>
  );
};

export default PendingInfoBox;
