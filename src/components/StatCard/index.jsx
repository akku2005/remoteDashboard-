import React from "react";

const Card = ({ icon: Icon, value, label, buttonText }) => {
  return (
    <div className="flex flex-col items-start p-[21px] gap-[10px] w-full h-[204px] bg-white bg-opacity-10 rounded-[16px] box-border border border-gray-400">
      <div className="flex items-start mb-2">
        {Icon && <Icon className="w-[32px] h-[32px] text-white mr-2" />}{" "}
        {/* Icon with margin */}
      </div>
      <div className="flex items-center justify-between w-full mt-auto h-[58px] gap-[10px]">
        {/* Aligning items */}
        <div className="flex items-end w-[171px] h-[58px] gap-[12px]">
          <div className="w-[74px] h-[58px] font-semibold text-[64px] leading-none text-white">
            {value}
          </div>
          <div className="text-[24px] leading-[28.8px] font-medium text-gray-300 whitespace-pre-wrap">
            {label}
          </div>
        </div>
        <button className="bg-black text-green-500 font-medium rounded-full px-4 py-2 w-[75px] h-[37px]">
          {buttonText} {/* Button aligned to the right */}
        </button>
      </div>
    </div>
  );
};

export default Card;
