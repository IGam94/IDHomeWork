/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
     sm: { min: "390px", max: "620px" },
     md: { min: "621px", max: "1023px" },
     lg: { min: "1080px" },
   },
  },
  plugins: [],
}