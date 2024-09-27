import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

// Register the chart elements
ChartJS.register(ArcElement, Tooltip);

const ProjectInformationChart = () => {
  // State to hold chart data
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulate an API call or dynamic data fetch
    const fetchChartData = async () => {
      const onlineDevices = 60; // Example: 60 online devices

      // Create a linear gradient
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(144, 238, 144, 1)"); // Light green
      gradient.addColorStop(1, "rgba(34, 139, 34, 1)"); // Dark green

      const data = {
        labels: ["Online Devices"], // Only online devices are shown
        datasets: [
          {
            label: "Device Status",
            data: [onlineDevices], // Only show online devices
            backgroundColor: [gradient], // Use the gradient
            borderColor: ["rgba(34, 139, 34, 1)"], // Dark green border
            borderWidth: 2,
            borderRadius: 20, // Rounded edges of the doughnut segments
            hoverOffset: 8, // Adds a "3D" pop-out effect on hover
            shadowOffsetX: 2, // Adds a horizontal shadow
            shadowOffsetY: 2, // Adds a vertical shadow
            shadowBlur: 5, // Blurs the shadow
            shadowColor: "rgba(0, 0, 0, 0.5)", // Sets the shadow color to a dark gray
          },
        ],
      };

      // Simulate a delay (e.g., waiting for an API response)
      setTimeout(() => {
        setChartData(data);
      }, 1000);
    };

    fetchChartData();
  }, []);

  // Render loading indicator until data is ready
  if (!chartData) {
    return (
      <p className="text-center justify-center items-center">
        Loading chart data...
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="p-6 w-full max-w-lg">
        {/* New Div Section - Left and Right Text */}
        <div className="grid grid-cols-2 mt-4 justify-between text-left">
          <div>
            <img src={""} alt="icons" />
          </div>
          <div>
            <p>8th September 2024</p>
          </div>
        </div>
        {/* Text Section */}
        <div className="grid grid-cols-2 mt-5 text-left">
          <div>
            <h2 className="text-2xl font-bold ">My Project</h2>
            <p className=" text-sm font-normal">Moli Area</p>
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

        {/* Doughnut Chart Section */}
        <div
          className="mt-0 flex justify-center"
          style={{ height: "300px", width: "300px" }}
        >
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              cutout: "70%", // Doughnut shape
              plugins: {
                legend: {
                  display: false, // Hide the legend below
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      const value = tooltipItem.raw;
                      return `${value} devices`; // Display absolute numbers
                    },
                  },
                },
              },
              animation: {
                animateScale: true,
                animateRotate: true,
              },
              layout: {
                padding: 2,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInformationChart;
