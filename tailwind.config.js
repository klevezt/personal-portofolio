/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      "1/2": "50%",
      "1/3": "33%",
    },
    extend: {
      spacing: {
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
