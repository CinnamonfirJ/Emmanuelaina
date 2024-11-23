/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        primary: "#864BE7",
        secondary: "#B089F0",
        grayBorder: "#D9D9D9",
        statusGreen: "#33B91D",
      },
    },
  },
  plugins: [],
};
