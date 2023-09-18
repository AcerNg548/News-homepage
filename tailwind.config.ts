/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "320px", max: "393px" },
      // => @media (min-width: 320px and max-width: 393px) { ... }

      mobileBig: { min: "412px", max: "428px" },
      // => @media (min-width: 412px and max-width: 428px) { ... }

      desktop: { min: "768px", max: "1920px" },
      // => @media (min-width: 768px and max-width: 1920px) { ... }
    },
    colors: {
      SoftOrange: "#e9ab53",
      SoftRed: "#f15e50",
      OffWhite: "#fffdfa",
      GrayishBlue: "#c5c6ce",
      DarkGrayishBlue: "#5d5f79",
      VeryDarkBlue: "#00001a",
      Black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
