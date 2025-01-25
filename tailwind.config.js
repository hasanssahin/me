/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/css/*.css"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #000000, #02052A)",
        "custom-bg": "linear-gradient(to top, rgba(0,0,0,1),rgba(0,34,105,0.7)), url('./images/ocean.jpg')",
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
}
