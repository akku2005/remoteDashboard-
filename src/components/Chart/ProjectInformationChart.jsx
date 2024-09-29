import React, { useEffect, useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectInformationChart = () => {
  // State to hold chart data
  const [chartData, setChartData] = useState(null);
  const [chartData2, setChartData2] = useState(null); // Second chart data
  const chartRef = useRef(null); // Ref for the chart

  useEffect(() => {
    // Simulate an API call or dynamic data fetch
    const fetchChartData = async () => {
      const onlineDevices = 70; // Example: 70 online devices
      const offlineDevices = 30; // Example: 30 offline devices

      const data1 = {
        labels: ["Online Devices"], // Only online devices are shown
        datasets: [
          {
            label: "Device Status",
            data: [onlineDevices, 100 - onlineDevices], // Show online and remaining devices
            backgroundColor: [
              "rgba(50, 205, 50, 1)", // Bright green (Online devices)
              getGradient(chartRef.current), // Gradient for the remaining
            ],
            hoverBackgroundColor: [
              "rgba(50, 205, 50, 0.8)",
              "rgba(50, 205, 50, 0.4)",
            ],
            borderWidth: 0, // No border for the segments
            cutout: "70%", // Adjust to create the thickness effect
          },
        ],
      };

      const data2 = {
        labels: ["Offline Devices"], // Only offline devices are shown
        datasets: [
          {
            label: "Device Status",
            data: [offlineDevices, 100 - offlineDevices], // Show offline and remaining devices
            backgroundColor: [
              getGradient(chartRef.current), // Gradient for the offline devices
              "rgba(50, 205, 50, 0.2)", // Light green for the remaining
            ],
            hoverBackgroundColor: [
              "rgba(50, 205, 50, 0.8)",
              "rgba(50, 205, 50, 0.4)",
            ],
            borderWidth: 0, // No border for the segments
            cutout: "0%", // Adjust to create the thickness effect
          },
        ],
      };

      // Simulate a delay (e.g., waiting for an API response)
      setTimeout(() => {
        setChartData(data1);
        setChartData2(data2);
      }, 1000);
    };

    fetchChartData();
  }, []);

  // Create a gradient color for the doughnut chart
  const getGradient = (canvas) => {
    if (!canvas) return "rgba(50, 205, 50, 0.2)"; // Fallback color

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 250, 0); // Adjust gradient coordinates if necessary
    gradient.addColorStop(0, "rgba(144, 238, 144, 1)"); // Light green
    gradient.addColorStop(0.5, "rgba(60, 179, 113, 1)"); // Medium green
    gradient.addColorStop(1, "rgba(0, 128, 0, 1)"); // Dark green

    return gradient;
  };

  // Render loading indicator until data is ready
  if (!chartData || !chartData2) {
    return (
      <p className="text-center justify-center items-center">
        Loading chart data...
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div
        style={{
          position: "relative",
          width: "100%", // Set width to 100%
          maxWidth: "300px", // Maximum width for larger screens
          height: "300px", // Set height
        }}
        ref={chartRef}
      >
        {/* Main Doughnut Chart (Online Devices) */}
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
            elements: {
              arc: {
                borderRadius: 20, // Rounded edges of the doughnut segments
                shadowOffsetX: 5, // Horizontal shadow effect
                shadowOffsetY: 5, // Vertical shadow effect
                shadowBlur: 15, // Blur for the shadow
                shadowColor: "rgba(0, 0, 0, 0.4)", // Color of the shadow
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

        {/* Overlay Doughnut Chart (Offline Devices) */}
        <Doughnut
          data={chartData2}
          options={{
            responsive: true,
            cutout: "70%", // Doughnut shape
            rotation: Math.PI, // Rotate to make the overlap more visually appealing
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
            elements: {
              arc: {
                borderRadius: 20, // Rounded edges of the doughnut segments
                shadowOffsetX: 5, // Horizontal shadow effect
                shadowOffsetY: 5, // Vertical shadow effect
                shadowBlur: 15, // Blur for the shadow
                shadowColor: "rgba(0, 0, 0, 0.4)", // Color of the shadow
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
          style={{
            position: "absolute", // Position overlay on top of the main chart
            top: 0,
            left: 0,
            height: "100%", // Set height to 100% for responsiveness
            width: "100%", // Set width to 100% for responsiveness
          }}
        />
      </div>
    </div>
  );
};

export default ProjectInformationChart;
