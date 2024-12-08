/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6747ED",
        secondary: "",
        "text-secondary": "rgba(255,255,255,0.4)",
        background: "#05051E",
        border: "rgba(255,255,255,0.1)",
        card: "rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
