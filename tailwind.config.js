/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode using .dark
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App Router support
  ],
  theme: {
    extend: {
      colors: {
        text: "#0c1909",
        background: "#fafdfa",
        primary: "#3ebe30",
        secondary: "#a1ddba",
        accent: "#76cdb1",
      },
    },
  },
  plugins: [],
};
