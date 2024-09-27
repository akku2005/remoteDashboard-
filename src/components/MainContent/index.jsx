// MainContent.jsx
import React from "react";
import Card from "../StatCard";
import {
  HomeIcon,
  BellIcon,
  ShieldCheckIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import DeviceCard from "../StatCard/DeviceCard";
import ProjectInformationChart from "../Chart/ProjectInfromationChart"; // Corrected import

const MainContent = () => {
  return (
    <div className="statistics mt-6">
      {/* Header with Resources and Statistics */}
      <div className="col-span-3 flex justify-between items-center mt-5">
        <div className="flex flex-row text-left gap-5">
          <div className="flex flex-col text-left">
            <div className="text-xl font-medium">Resources</div>
            <div className="text-2xl text-gray-300 font-bold flex items-baseline">
              <span className="mr-2">12</span>
              <p className="text-sm text-gray-400">Total Device</p>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div className="text-xl font-medium">Statistics</div>
            <div className="text-2xl text-gray-300 font-bold flex items-baseline">
              <span className="mr-2">06</span>
              <p className="text-sm text-gray-400">Offline Device</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <WifiIcon className="w-16 h-16 text-white" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-2 mt-10">
        <Card
          icon={HomeIcon}
          value={12.5}
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
          value={8.3}
          label="Online Devices"
          buttonText="Details"
        />
      </div>

      {/* Device Information Section */}
      <div className="grid grid-cols-2 gap-2 mt-10">
        <div className="grid grid-cols-2 gap-2">
          <h2 className="col-span-2 text-xl font-semibold mb-2">
            Device Information
          </h2>
          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12.5}
            label="Devices"
          />
          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12.5}
            label="Device Items"
            buttonText="View"
          />
          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12.5}
            label="Devices"
          />
          <DeviceCard
            icon1={HomeIcon}
            icon2={BellIcon}
            value={12.5}
            label="Devices"
            buttonText="View"
          />
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 gap-2  ml-10 justify-center ">
          <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-1 justify-center items-center text-center w-full max-w-lg ">
            <div className="ml-10 justify-center items-center">
              <ProjectInformationChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
