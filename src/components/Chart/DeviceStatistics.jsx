import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import Icons from "../../constants/Icons";
import { ThemeContext } from "../../context/ThemeContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const DeviceStatistics = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const data = {
    labels: ["Gateway", "AP"],
    datasets: [
      {
        data: [1, 1],
        backgroundColor: isDarkMode
          ? ["#8BC34A", "#2196F3"]
          : ["#4CAF50", "#2196F3"],
        borderColor: isDarkMode
          ? ["#8BC34A", "#2196F3"]
          : ["#4CAF50", "#2196F3"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className={`bg-white bg-opacity-10 rounded-lg p-6 border-[2px]  ${
        isDarkMode ? "border-gray-700" : "border-green-800"
      } border-opacity-30 w-full h-auto sm:h-[360px] lg:h-[390px] mt-8`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              className="w-[48px] h-[48px]"
              src={Icons.Maskgroup}
              alt="Project Icon"
            />
          </div>
          <div>
            <h2
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-xl sm:text-2xl font-semibold`}
            >
              My Project
            </h2>
            <p className="text-green-400 text-sm sm:text-base">Mall Area</p>
          </div>
        </div>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } text-sm sm:text-base`}
        >
          8th September 2024
        </p>
      </div>

      {/* Statistics and Doughnut Chart */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-16">
        <div className="flex gap-9">
          {/* Gateway Info */}
          <div className="text-center mb-4 sm:mb-0">
            <p
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-3xl sm:text-4xl font-semibold`}
            >
              01
            </p>
            <p className="text-green-400 text-base sm:text-lg">Gateway</p>
          </div>

          {/* Divider */}
          <div className="h-2 sm:h-16 w-full sm:w-2 bg-green-500 border border-green-500 mx-2 my-4 sm:my-0"></div>

          {/* AP Info */}
          <div className="text-center mb-4 sm:mb-0">
            <p
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } text-3xl sm:text-4xl font-semibold`}
            >
              01
            </p>
            <p className="text-green-400 text-base sm:text-lg">AP</p>
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="w-28 h-28 sm:w-36 sm:h-36">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DeviceStatistics;
