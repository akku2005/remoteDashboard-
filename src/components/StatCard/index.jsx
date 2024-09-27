// Card.jsx
import React from "react";

const Card = ({ icon: Icon, value, label, buttonText }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col w-full h-[180px]">
      <div className="flex items-start mb-2">
        {Icon && <Icon className="w-6 h-6 text-white mr-2" />}{" "}
        {/* Icon with margin */}
      </div>
      <div className="flex items-center justify-between mt-auto w-full">
        {" "}
        {/* Aligning items */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-sm text-gray-200">{label}</div>
        </div>
        <button className="bg-black text-green-500 font-medium rounded-3xl px-4 py-2">
          {buttonText} {/* Button aligned to the right */}
        </button>
      </div>
    </div>
  );
};

export default Card;
