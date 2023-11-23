/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#56B280",
        "custom-black": "#272727",
        "dark-1": "#5E6E89",
        "dark-2": "#1D252C",
      },
    },
  },
  plugins: [],
};
