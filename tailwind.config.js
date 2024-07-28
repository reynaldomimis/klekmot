/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: "350px", // Add custom breakpoint for 350px
      },
      fontSize: {
        smaller: "0.775rem", // Add a smaller font size if needed
      },
    },
  },
  plugins: [],
};
