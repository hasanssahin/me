/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/css/*.css"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #000000, #02052A)",
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
}
