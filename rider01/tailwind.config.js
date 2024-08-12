/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        felldo : ["IM Fell DW Pica SC"],
        arsenal : ["arsenal-sc-regular"]
      }
    },
  },
  plugins: [],
}

