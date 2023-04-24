/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInLeft:
          "fadeInLeft 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        fadeInTop:
          "fadeInTop 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            transform: "translateX(-50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        fadeInTop: {
          "0%": {
            transform: "translateY(-50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
