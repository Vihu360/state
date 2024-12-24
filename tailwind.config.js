/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikExtraBold: ["Rubik-ExtraBold", "sans-serif"],
        rubikSemiBold: ["Rubik-SemiBold", "sans-serif"],
        rubikLight: ["Rubik-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
}

