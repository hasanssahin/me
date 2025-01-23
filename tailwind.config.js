/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/css/*.css"],
  theme: {
    extend: {
      height: { "calc-screen-minus-navbar": "calc(100% - 80px)" },
      textColor: { primary: "#020429" },
      backgroundColor: { primary: "#020429" },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to top, #01020a, #020429)",
      },
    },
  },
  plugins: [],
}
