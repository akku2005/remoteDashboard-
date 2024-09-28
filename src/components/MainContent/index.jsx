import React from "react";
import Card from "../StatCard";
import {
  HomeIcon,
  BellIcon,
  ShieldCheckIcon,
  WifiIcon,
} from "@heroicons/react/24/outline"; // Ensure you import only what you need
import DeviceCard from "../StatCard/DeviceCard";
import ProjectInformationChart from "../Chart/ProjectInfromationChart"; // Corrected import spelling
import Icons from "../../constants/Icons";

const MainContent = () => {
  return (
    <div className="statistics mt-6">
      {/* Header with Resources and Statistics */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-row gap-5 w-[405px] h-[118px]">
          <div className="flex flex-col">
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

          <div className="flex flex-col">
            <div className="text-xl font-medium">Statistics</div>
            <div className="text-white font-bold flex items-end gap-4 mt-3">
              <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
                06
              </span>
              <p className="text-[24px] leading-[28.8px] font-medium text-gray-300 ml-4">
                Offline Devices
              </p>
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex space-x-4 w-[111px] h-[111px]">
          <img src={Icons.wifiIcon} alt="WiFi" className="w-full h-full" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-4 mt-10">
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
      <div className="grid grid-cols-2 gap-[16px] mt-10">
        <div className="grid grid-cols-2 gap-[16px]">
          <h2 className="col-span-2 text-xl font-semibold mb-0">
            Device Information
          </h2>
          <DeviceCard
            icon1={HomeIcon}
            value={12}
            label="Devices"
            buttonText="View"
            onButtonClick={() => console.log("Button Clicked")}
          />

          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12}
            label="Device Items"
          />
          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12}
            label="Devices"
          />
          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12}
            label="Device Items"
          />
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 gap-2 ml-10 justify-center">
          {/* Heading Outside the Box */}
          <h2 className="text-xl font-semibold mb-2">Additional Information</h2>

          {/* Box Container with Glassmorphism */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-[16px] border border-transparent pt-[24px] pl-[32px] pr-[32px] pb-[24px] w-[640px] h-[450px]">
            {/* Increased height by 50px */}
            <div className="grid grid-cols-2 mt-4 justify-between text-left">
              <div>
                <img src={Icons.Maskgroup} alt="icons" />
              </div>
              <div>
                <p>8th September 2024</p>
              </div>
            </div>
            {/* Text Section */}
            <div className="grid grid-cols-2 mt-5 text-left">
              <div>
                <h2 className="text-2xl font-bold">My Project</h2>
                <p className="text-sm font-normal">Moli Area</p>
              </div>
              <div className="grid grid-cols-3 items-center">
                <div>
                  <h3 className="text-2xl font-bold">01</h3>
                  <p className="text-sm font-normal">Gateway</p>
                </div>

                {/* Vertical Line */}
                <div className="w-[5px] h-[50px] bg-green-400 mx-auto" />

                <div>
                  <h3 className="text-2xl font-bold">01</h3>
                  <p className="text-sm font-normal">AP</p>
                </div>
              </div>
            </div>
            <ProjectInformationChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
