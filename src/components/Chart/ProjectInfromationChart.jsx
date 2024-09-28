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

      const data = {
        labels: ["Online Devices"], // Only online devices are shown
        datasets: [
          {
            label: "Device Status",
            data: [onlineDevices], // Only show online devices
            backgroundColor: [
              "conic-gradient(#00ff00 0% 25%, transparent 25% 100%)",
            ], // Use the conic gradient
            borderColor: ["#2f4f4f"], // Dark green border
            borderWidth: 2,
            borderRadius: 20, // Rounded edges of the doughnut segments
            hoverOffset: 8, // Adds a "3D" pop-out effect on hover
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
      <div>
        <div
          className="flex justify-center"
          style={{ height: "250px", width: "250px" }} // Adjusted size to fit better in the card
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
                padding: 5, // Added padding to avoid chart touching the edges
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInformationChart;
