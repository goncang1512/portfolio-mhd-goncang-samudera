/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        14000: "14000ms",
        12000: "12000ms",
        6000: "6000ms",
      },
      colors: {
        "netral-225": "#f9f9f9",
      },
    },
  },
  plugins: [require("daisyui")],
};
