/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        1: "linear-gradient(0deg, rgba(136, 111, 190, 0.2), rgba(136, 111, 190, 0.2)), linear-gradient(120.36deg, rgb(18, 44, 136) 26.58%, rgb(0, 209, 255) 106.8%)",
      },
      boxShadow: {
        1: "rgba(0, 0, 0, 0.07) 0px 5px 7px, rgba(50, 74, 123, 0.5) 0px 1px 0px inset",
        2: "rgb(37, 150, 190) 0px 0px 10px 5px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
