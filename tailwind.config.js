/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2vw": "2vw",
        "5vw": "5vw",
        "6vw": "6vw",
      },
      fontFamily: {
        custom: ["Fredericka the Great"],
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33%",
      },
      colors: {
        black: "#000",
      },
      spacing: {
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
