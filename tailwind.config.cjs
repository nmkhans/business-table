/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c026d3",
          secondary: "#2D033B",
          accent: "#334155",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },
}
