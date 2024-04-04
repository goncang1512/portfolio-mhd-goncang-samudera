/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        20000: "20000ms",
        16000: "16000ms",
        14000: "14000ms",
        13000: "13000ms",
        12000: "12000ms",
        6000: "6000ms",
      },
      colors: {
        "netral-225": "#f9f9f9",
      },
      margin: {
        "100px": "100px",
      },
      width: {
        575: "575px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
