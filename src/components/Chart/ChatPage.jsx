import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const UserActivity = () => {
  // State to track visibility of each dataset
  const [visibleDatasets, setVisibleDatasets] = useState({
    "2024-09-09": true,
    "2024-09-03": true,
    "2024-10-01": true,
  });

  // Function to toggle visibility of the datasets
  const toggleDatasetVisibility = (label) => {
    setVisibleDatasets((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  // Data for the line chart with multiple datasets
  const chartData = {
    labels: ["0", "0.2", "0.4", "0.6", "0.8", "1"], // X-axis labels
    datasets: [
      {
        label: "2024-09-09",
        data: [0.1, 0.3, 0.5, 0.7, 0.9, 1], // Data points for the first date
        borderColor: "rgba(168, 85, 247, 0.8)", // Purple color for the line
        backgroundColor: "rgba(168, 85, 247, 0.3)", // Lighter fill
        borderWidth: 2, // Line thickness
        pointRadius: 3, // Size of data points
        pointBackgroundColor: "rgba(168, 85, 247, 1)", // Point color
        fill: true, // Fill the area under the line
        hidden: !visibleDatasets["2024-09-09"], // Control dataset visibility
      },
      {
        label: "2024-09-03",
        data: [0.2, 0.4, 0.6, 0.8, 1, 1.2], // Data points for the second date
        borderColor: "rgba(252, 211, 77, 0.8)", // Yellow color for the line
        backgroundColor: "rgba(252, 211, 77, 0.3)", // Lighter fill
        borderWidth: 2, // Line thickness
        pointRadius: 3, // Size of data points
        pointBackgroundColor: "rgba(252, 211, 77, 1)", // Point color
        fill: true, // Fill the area under the line
        hidden: !visibleDatasets["2024-09-03"], // Control dataset visibility
      },
      {
        label: "2024-10-01",
        data: [0.3, 0.5, 0.7, 0.9, 1.1, 1.3], // Data points for the third date
        borderColor: "rgba(34, 197, 94, 0.8)", // Green color for the line
        backgroundColor: "rgba(34, 197, 94, 0.3)", // Lighter fill
        borderWidth: 2, // Line thickness
        pointRadius: 3, // Size of data points
        pointBackgroundColor: "rgba(34, 197, 94, 1)", // Point color
        fill: true, // Fill the area under the line
        hidden: !visibleDatasets["2024-10-01"], // Control dataset visibility
      },
    ],
  };

  // Chart options for better visualization
  const chartOptions = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows better scaling
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // X-axis grid color
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)", // X-axis tick color
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Y-axis grid color
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.5)", // Y-axis tick color
          beginAtZero: true, // Ensures Y-axis starts from 0
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Shows the default legend
        labels: {
          color: "white", // Legend text color
        },
      },
      tooltip: {
        enabled: true, // Enables hover tooltips to show data points
      },
    },
  };

  return (
    <div>
      <div className="bg-white bg-opacity-10 rounded-lg p-6 border  border-gray-100 border-opacity-30">
        {/* Custom legend for the chart */}
        <div className="flex items-center mb-4">
          <div
            className="flex items-center mr-4 cursor-pointer"
            onClick={() => toggleDatasetVisibility("2024-09-09")}
          >
            <div className="w-[40px] h-[17px] bg-purple-300 mr-2 rounded-[5px]"></div>
            <span className="text-white">2024-09-09</span>
          </div>
          <div
            className="flex items-center mr-4 cursor-pointer"
            onClick={() => toggleDatasetVisibility("2024-09-03")}
          >
            <div className="w-[40px] h-[17px] bg-yellow-300 mr-2 rounded-[5px]"></div>
            <span className="text-white">2024-09-03</span>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleDatasetVisibility("2024-10-01")}
          >
            <div className="w-[40px] h-[17px] bg-green-300 mr-2 rounded-[5px]"></div>
            <span className="text-white">2024-10-01</span>
          </div>
          <div className="ml-auto">
            <button className="bg-[#56EE6830] text-[#56EE68] font-medium rounded-full border border-[#56EE68] opacity-100 w-[143px] h-[37px] flex justify-center items-center">
              Nearly 3 Days
            </button>
          </div>
        </div>
        {/* Chart container with dynamic height */}
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
