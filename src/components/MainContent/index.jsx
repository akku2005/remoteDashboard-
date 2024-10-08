// import React from "react";
// import Card from "../StatCard";
// import {
//   HomeIcon,
//   BellIcon,
//   ShieldCheckIcon,
// } from "@heroicons/react/24/outline";
// import DeviceCard from "../StatCard/DeviceCard";
// import Icons from "../../constants/Icons";
// import Frame10588 from "../../assets/icons/Frame10588.png";

// const MainContent = () => {
//   return (
//     <div className="statistics mt-6">
//       {/* Header with Resources and Statistics */}
//       <div className="flex flex-col md:flex-row items-center mt-5">
//         {/* Resource Section */}
//         <div className="flex flex-col md:flex-row gap-5 w-full md:w-[650px] h-auto">
//           {/* Resource Title */}
//           <div className="flex flex-col flex-1">
//             <div className="text-xl font-medium text-white">Resource</div>

//             {/* Total Devices */}
//             <div className="text-white font-bold flex items-end gap-4 mt-3">
//               <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
//                 12
//               </span>
//               <p className="text-[24px] leading-[28px] font-medium text-gray-300">
//                 Total Devices
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Statistics Section */}
//         <div className="flex flex-col md:flex-row gap-5 w-full md:w-[650px] h-auto">
//           {/* Online Total */}
//           <div className="flex flex-col flex-1">
//             <div className="text-white font-bold flex items-end gap-4 mt-3">
//               <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
//                 06
//               </span>
//               <p className="text-[24px] leading-[28px] font-medium text-gray-300">
//                 Online Total
//               </p>
//             </div>
//           </div>

//           {/* Alarm Total */}
//           <div className="flex flex-col flex-1">
//             <div className="text-white font-bold flex items-end gap-4 mt-3">
//               <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
//                 04
//               </span>
//               <p className="text-[24px] leading-[28px] font-medium text-gray-300">
//                 Alarm Total
//               </p>
//             </div>
//           </div>

//           {/* Offline Total */}
//           <div className="flex flex-col flex-1">
//             <div className="text-white font-bold flex items-end gap-4 mt-3">
//               <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
//                 06
//               </span>
//               <p className="text-[24px] leading-[28px] font-medium text-gray-300">
//                 Offline Total
//               </p>
//             </div>
//           </div>

//           {/* Inspection Report */}
//           <div className="flex flex-col flex-1">
//             <div className="text-white font-bold flex items-end gap-4 mt-3">
//               <span className="w-[63px] h-[58px] font-semibold text-[64px] leading-none">
//                 06
//               </span>
//               <p className="text-[24px] leading-[28px] font-medium text-gray-300">
//                 Inspection Report
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Icon Section */}
//         <div className="flex space-x-4 w-full md:w-[111px] h-auto justify-center mt-4 md:mt-0">
//           <img src={Icons.wifiIcon} alt="WiFi Icon" className="w-full h-full" />
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
//         <Card
//           icon={HomeIcon}
//           value={12}
//           label="Total Devices"
//           buttonText="View"
//         />
//         <Card
//           icon={BellIcon}
//           value={6.0}
//           label="Offline Devices"
//           buttonText="Check"
//         />
//         <Card
//           icon={ShieldCheckIcon}
//           value={8}
//           label="Online Devices"
//           buttonText="Details"
//         />
//       </div>

//       {/* Device Information Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
//         <div className="grid grid-cols-1 gap-4">
//           <h2 className="text-xl font-semibold mb-4">Device Information</h2>

//           {/* Device Cards - Each card will take full width on mobile and be responsive */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <DeviceCard
//               icon1={HomeIcon}
//               value={12}
//               label="Devices"
//               buttonText="View"
//               onButtonClick={() => console.log("Device Button Clicked")}
//             />
//             <DeviceCard
//               icon1={HomeIcon}
//               icon2={BellIcon}
//               value={12}
//               label={
//                 <>
//                   Device
//                   <br />
//                   Items
//                 </>
//               }
//             />
//             <DeviceCard
//               icon1={HomeIcon}
//               icon2={BellIcon}
//               value={12}
//               label="Devices"
//               onButtonClick={() => console.log("Devices Button Clicked")}
//             />
//             <DeviceCard
//               icon1={HomeIcon}
//               icon2={BellIcon}
//               value={12}
//               label="Device Items"
//               onButtonClick={() => console.log("Device Items Button Clicked")}
//             />
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="grid grid-cols-1 gap-4 justify-center">
//           {/* Heading Outside the Box */}
//           <h2 className="text-xl font-semibold mb-2">Additional Information</h2>

//           <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-[16px] border border-transparent pt-[24px] px-4 pb-[24px] w-full h-[500px] mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-between text-left">
//               <div>
//                 <img
//                   src={Icons.Maskgroup}
//                   alt="Mask Group Icon"
//                   className="w-[32px] h-[32px] md:w-[42px] md:h-[42px]" // Adjust size for mobile and larger screens
//                 />
//               </div>
//               <div className="flex items-center md:justify-end">
//                 <p className="text-center md:text-right">8th September 2024</p>
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 mt-4 justify-between text-left">
//               <div>
//                 <h2 className="text-xl md:text-2xl font-bold">My Project</h2>
//                 <p className="text-sm font-normal">Moli Area</p>
//               </div>
//               <div className="flex items-center md:justify-end">
//                 <div className="grid grid-cols-2 justify-between">
//                   <div className="w-[8px] h-[50px] bg-slate-400 mx-auto" />
//                   <div>
//                     <h3 className="text-xl md:text-2xl font-bold">01</h3>
//                     <p className="text-sm font-normal">Gateway</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 justify-between">
//                   <div className="w-[8px] h-[50px] bg-green-400 mx-auto" />
//                   <div>
//                     <h3 className="text-xl md:text-2xl font-bold">01</h3>
//                     <p className="text-sm font-normal">Gateway</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Chart Section */}
//             <div className="mb-12 flex justify-center mt-6">
//               <img
//                 src={Frame10588}
//                 alt="Chart Representation"
//                 className="max-w-[328px] h-auto md:max-w-[400px]" // Adjust chart image size for mobile and larger screens
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;

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
      <div className="grid-container">
        {/* Resource Section */}
        <div className="flex flex-col gap-8 w-full h-auto">
          <div className="flex flex-col flex-1">
            <div
              className={`flex items-center justify-between text-xl font-medium mb-2`}
            >
              <p>Resource Statistics</p>
            </div>
            <div className="flex flex-col md:flex-row gap-16 mt-3">
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
                  <p
                    className={`text-[16px] md:text-[20px] leading-[24px] font-medium`}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex justify-end w-full mt-10 md:ml-40">
          <img
            src={Icons.wifiIcon}
            alt="WiFi Icon"
            className="hidden md:block w-auto h-auto md:w-[80px] md:h-[80px]"
          />
        </div>
      </div>

      {/* Chart Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex-1 mt-1">
            {/* Project Info Header */}
            <h1 className={`text-2xl md:text-3xl font-[500] mb-6`}>
              Project Info
            </h1>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              {/* First Project Box */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col justify-between w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex-1">
                <div className="flex items-center mb-2 gap-4">
                  <FaWifi className="h-[24px] w-[24px] text-[rgb(86,238,104)]" />
                  <h2 className={`text-lg md:text-xl`}>My Project</h2>
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
                <div className="text-center">
                  <FaWifi className="text-xl mb-2" />
                  <h2 className={`text-lg md:text-3xl font-semibold`}>
                    No Project Info
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {/* Pending info */}
            <div className="text-center">
              <div className="flex justify-between items-center mb-7">
                <h1 className={`text-2xl md:text-3xl font-[500]`}>
                  Pending Info
                </h1>
                <FaInfoCircle className={`w-[24px] h-[24px]`} />
              </div>

              {/* Two boxes side by side */}
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                {/* First Box */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex flex-col justify-between">
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-5xl font-bold">02</div>
                    <div className={`text-lg md:text-3xl font-[500]`}>
                      Pending Project
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col items-end justify-end w-full">
                    <button className="bg-[#56EE6830] text-[#56EE68] font-medium rounded-full border border-[#56EE68] opacity-100 w-[150px] h-[37px] flex justify-center items-center p-[10px]">
                      Dispose
                    </button>
                  </div>
                </div>

                {/* Second Box */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex flex-col justify-between">
                  <div className="flex justify-between items-center w-full px-4">
                    <div className="text-5xl font-bold">0</div>
                    <div className={`text-lg md:text-3xl font-medium`}>
                      Account Change
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col items-end justify-end w-full">
                    <button className="bg-[#56EE6830] text-[#56EE68] font-medium rounded-full border border-[#56EE68] opacity-100 w-[150px] h-[37px] flex justify-center items-center p-[10px]">
                      Dispose
                    </button>
                  </div>
                </div>
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
