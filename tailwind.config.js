/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/css/*.css"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #01020a, #020429)",
      },
      screens: {
        xs: "0px",
      },
    },
  },
  plugins: [],
}
