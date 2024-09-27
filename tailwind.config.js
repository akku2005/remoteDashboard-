/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-bg-color": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
