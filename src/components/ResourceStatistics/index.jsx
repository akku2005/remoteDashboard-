import { useState } from "react";
import { FaWifi } from "react-icons/fa"; // Import FaWifi icon

const ResourceStatistics = () => {
  const [selectedStat, setSelectedStat] = useState(0); // To track the selected statistic

  // Statistics data
  const statistics = [
    { count: 12, label: "Total Devices" },
    { count: 6, label: "Online Total" },
    { count: 4, label: "Alarm Total" },
    { count: 6, label: "Offline Total" },
    { count: 6, label: "Inspection Report" },
  ];

  // Function to handle dot click and update selectedStat
  const handleDotClick = (index) => {
    setSelectedStat(index);
  };

  return (
    <div className="flex flex-col w-full  md:hidden">
      <h2 className="text-lg md:text-xl mb-4 flex items-center gap-2">
        Resource Statistics
      </h2>

      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col justify-between w-full h-[200px] gap-4 border border-gray-100 border-opacity-30 flex-1">
        {/* Current Statistic Display */}
        <div className="flex flex-row gap-24 items-center mb-4 w-full justify-center">
          <div className="flex flex-row items-center gap-2">
            <span className="text-4xl font-bold">
              {statistics[selectedStat].count}
            </span>
            <span className="text-sm">{statistics[selectedStat].label}</span>
          </div>
          {selectedStat + 1 < statistics.length && (
            <div className="flex flex-row items-center gap-2 mt-2">
              <span className="text-4xl font-bold">
                {statistics[selectedStat + 1].count}
              </span>
              <span className="text-sm">
                {statistics[selectedStat + 1].label}
              </span>
            </div>
          )}
        </div>

        {/* Dots section */}
        <div className="flex justify-center mt-4">
          {statistics.map((_, index) => (
            <span
              key={index}
              className={`rounded-full w-3 h-3 mx-1 cursor-pointer ${
                selectedStat === index
                  ? "bg-green-400"
                  : "border-[2px] border-green-500"
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceStatistics;
