/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "custom-navy": "#293462",
        "custom-teal": "#1CD6CE",
        "custom-yellow": "#FEDB39",
        "custom-red": "#D61C4E",
        "custom-white": "#ffffff",
      },
    },
  },
};
