/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#233ce6",
        secondary: "#3d46a2",
        "secondary-50": "#4F5AD1",
      },
      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scrollRight: "scrollRight 10s linear infinite",
        scrollLeft: "scrollLeft 10s linear infinite",
      },
    },
  },
  plugins: [],
};
