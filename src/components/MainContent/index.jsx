import React from "react";
import Card from "../StatCard";
import {
  HomeIcon,
  BellIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import DeviceCard from "../StatCard/DeviceCard";
import Icons from "../../constants/Icons";
import Frame10588 from "../../assets/icons/Frame10588.png";

const MainContent = () => {
  return (
    <div className="statistics mt-6">
      {/* Header with Resources and Statistics */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5">
        {/* Resource and Statistics Section */}
        <div className="flex flex-col md:flex-row gap-5 w-full md:w-[405px] h-auto md:h-[118px]">
          {/* Resources */}
          <div className="flex flex-col flex-1">
            <div className="text-xl font-medium">Resources</div>
            <div className="text-white font-bold flex items-end gap-4 mt-3">
              <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
                12
              </span>
              <p className="text-[24px] leading-[28.8px] font-medium text-gray-300 ml-4">
                Total Devices
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="flex flex-col flex-1">
            <div className="text-xl font-medium">Statistics</div>
            <div className="text-white font-bold flex items-end gap-4 mt-3 ">
              <span className="w-[63px] h-[58px] font-semibold text-[64px]  leading-none">
                06
              </span>
              <p className="text-[24px] leading-[28.8px] font-medium text-gray-300 ml-4">
                Offline Devices
              </p>
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex space-x-4 w-full md:w-[111px] h-auto md:h-[111px] justify-center mt-4 md:mt-0">
          <img
            src={Icons.wifiIcon}
            alt="WiFi Icon"
            className="hidden md:block w-full h-full"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <Card
          icon={HomeIcon}
          value={12}
          label="Total Devices"
          buttonText="View"
        />
        <Card
          icon={BellIcon}
          value={6.0}
          label="Offline Devices"
          buttonText="Check"
        />
        <Card
          icon={ShieldCheckIcon}
          value={8}
          label="Online Devices"
          buttonText="Details"
        />
      </div>

      {/* Device Information Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-xl font-semibold mb-4">Device Information</h2>

          {/* Device Cards - Each card will take full width on mobile and be responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DeviceCard
              icon1={HomeIcon}
              value={12}
              label="Devices"
              buttonText="View"
              onButtonClick={() => console.log("Device Button Clicked")}
            />
            <DeviceCard
              icon1={HomeIcon}
              icon2={BellIcon}
              value={12}
              label={
                <>
                  Device
                  <br />
                  Items
                </>
              }
            />
            <DeviceCard
              icon1={HomeIcon}
              icon2={BellIcon}
              value={12}
              label="Devices"
              onButtonClick={() => console.log("Devices Button Clicked")}
            />
            <DeviceCard
              icon1={HomeIcon}
              icon2={BellIcon}
              value={12}
              label="Device Items"
              onButtonClick={() => console.log("Device Items Button Clicked")}
            />
          </div>
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 gap-4 justify-center">
          {/* Heading Outside the Box */}
          <h2 className="text-xl font-semibold mb-2">Additional Information</h2>

          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-[16px] border border-transparent pt-[24px] px-4 pb-[24px] w-full h-[500px] mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-between text-left">
              <div>
                <img
                  src={Icons.Maskgroup}
                  alt="Mask Group Icon"
                  className="w-[32px] h-[32px] md:w-[42px] md:h-[42px]" // Adjust size for mobile and larger screens
                />
              </div>
              <div className="flex items-center md:justify-end">
                <p className="text-center md:text-right">8th September 2024</p>
              </div>
            </div>

            {/* Text Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-between text-left">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">My Project</h2>
                <p className="text-sm font-normal">Moli Area</p>
              </div>
              <div className="flex items-center md:justify-end">
                <div className="grid grid-cols-2 justify-between">
                  <div className="w-[8px] h-[50px] bg-slate-400 mx-auto" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">01</h3>
                    <p className="text-sm font-normal">Gateway</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-between">
                  <div className="w-[8px] h-[50px] bg-green-400 mx-auto" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">01</h3>
                    <p className="text-sm font-normal">Gateway</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="mb-12 flex justify-center mt-6">
              <img
                src={Frame10588}
                alt="Chart Representation"
                className="max-w-[328px] h-auto md:max-w-[400px]" // Adjust chart image size for mobile and larger screens
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
