import React from "react";
import "../../styles/MainContent.scss";
import Icons from "../../constants/Icons";
import ChatPage from "../Chart/ChatPage";
import DeviceStatistics from "../Chart/DeviceStatistics";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { FaWifi, FaInfoCircle } from "react-icons/fa";
import ResourceStatistics from "../ResourceStatistics";
import PendingInfoBox from "../ResourceStatistics/PendingInfoBox"; // For large screen boxes
import MobilePendingInfoSection from "../ResourceStatistics/PendingInfoSection";
import MobileProjectInfo from "../ResourceStatistics/ProjectInfo";

// Register the necessary components for charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const MainContent = ({ isDarkMode }) => {
  const isMobile = window.innerWidth < 768;
  // Sample data for the Line Chart
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  // Sample data for the Pie Chart
  const pieChartData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  };

  // Define text color based on dark mode
  const textColorClass = isDarkMode ? "text-white" : "text-gray-800"; // Adjust colors as needed

  return (
    <section className={`main-content mt-6 mb-14`}>
      <div>
        {/* Resource Section for Mobile */}
        <div className="w-full ">
          <ResourceStatistics />
        </div>
        {/* Resource Section for Large Screens */}
        <div className="hidden md:flex flex-row gap-8 w-full h-auto">
          <div className="flex flex-col flex-1">
            <div className="flex items-center justify-between text-xl font-medium mb-2">
              <p>Resource Statistics</p>
            </div>

            <div className="flex flex-col md:flex-row gap-16 mt-3 w-full">
              {[
                { count: 12, label: "Total Devices" },
                { count: 6, label: "Online Total" },
                { count: 4, label: "Alarm Total" },
                { count: 6, label: "Offline Total" },
                { count: 6, label: "Inspection Report" },
              ].map(({ count, label }) => (
                <div key={label} className="font-bold flex items-end gap-4">
                  <span className="font-semibold text-[40px] md:text-[50px] leading-none">
                    {count}
                  </span>
                  <p className="text-[16px] md:text-[20px] leading-[24px] font-medium">
                    {label}
                  </p>
                </div>
              ))}
              {/* This is where the icon image is placed */}
              <div className="ml-auto flex items-center">
                {" "}
                {/* ml-auto pushes the image to the end */}
                <img
                  src={Icons.wifiIcon}
                  alt="WiFi Icon"
                  className="hidden md:block w-auto h-auto md:w-[80px] md:h-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div>
        <div className="grid grid-row md:grid-cols-2 gap-4">
          <div className="flex-1 flex-row mt-1">
            {/* Project Info Header */}
            <h1 className="text-3xl md:text-3xl font-bold mb-6">
              Project Info
            </h1>

            {isMobile ? (
              <MobileProjectInfo />
            ) : (
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row ">
                {/* First Project Box */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg  shadow-lg flex flex-col justify-between w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex-1 p-5">
                  <div className="flex items-center mb-2 gap-4">
                    <FaWifi className="h-[24px] w-[24px] text-[rgb(86,238,104)]" />
                    <h2 className="text-xl md:text-xl">My Project</h2>
                  </div>
                  <p className={`text-sm md:text-base mb-4`}>
                    Creation Time: 2024-08-22 17:59:59
                  </p>
                  <div className="flex justify-between">
                    <div className="text-center flex items-center gap-4">
                      <p className="text-3xl font-bold">01</p>
                      <p className="text-sm md:text-base">AP</p>
                    </div>
                    <div className="text-center flex items-center gap-4">
                      <p className="text-3xl font-bold">01</p>
                      <p className="text-sm md:text-base">Gateway</p>
                    </div>
                  </div>
                </div>

                {/* Second Project Box */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex flex-col justify-center items-center flex-1">
                  <div className="text-center flex justify-center">
                    <FaWifi className="text-xl mb-2 mx-auto" />
                  </div>
                  <h2 className={`text-lg md:text-3xl font-medium`}>
                    No Project Info
                  </h2>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1">
            {/* Pending info */}
            <div className="text-center ">
              <div className="flex justify-between items-center mb-7">
                <h1 className={`text-2xl md:text-3xl font-bold`}>
                  Pending Info
                </h1>
                <FaInfoCircle className={`w-[24px] h-[24px]`} />
              </div>

              {/* Conditional Rendering for Mobile and Large Screens */}
              <div className="hidden md:flex md:space-x-4">
                {/* Large Screen Boxes */}
                <div className="flex flex-row space-x-4 w-full">
                  <PendingInfoBox count={2} label="Pending Project" />
                  <PendingInfoBox count={0} label="Account Change" />
                </div>
              </div>

              <div className="flex md:hidden">
                {/* Mobile Screen Boxes */}
                <MobilePendingInfoSection />
              </div>
            </div>
          </div>
        </div>

        {/* Chat Page and Device Statistics Side by Side */}
        <div className="flex flex-col md:flex-row justify-between mt-8 w-full space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 inline-block mt-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className={`text-2xl md:text-3xl font-[500]`}>
                User Activity
              </h1>
            </div>
            <ChatPage />
          </div>
          <div className="w-full md:w-1/2 inline-block mt-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className={`text-2xl md:text-3xl font-[500]`}>
                Device Statistics
              </h1>
              <FaInfoCircle className={`w-[24px] h-[24px]`} />
            </div>
            <DeviceStatistics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
