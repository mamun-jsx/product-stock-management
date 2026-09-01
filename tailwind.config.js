/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#666666",
        accent: "#F7F7F7",
        border: "#EEEEEE",
        background: "#FFFFFF",
        surface: "#F7F7F7",
        placeholder: "#A3A3A3",
      },
    },
  },
  plugins: [],
};
