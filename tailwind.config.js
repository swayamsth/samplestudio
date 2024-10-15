/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi-Variable", "sans-serif"],
        cabinet: ["CabinetGrotesk-Variable", "sans-serif"],
      },
      colors: {
        contact: "#255769",
      },
    },
  },
  plugins: [],
};
