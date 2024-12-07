/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6747ED",
        secondary: "",
        background: "#151718",
        border: "",
        card: "#282A2C",
      },
    },
  },
  plugins: [],
};
