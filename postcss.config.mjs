// import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077B6", 
          light: "#00B4D8",
          dark: "#023E8A",
        },
        secondary: {
          DEFAULT: "#FFB703",
          light: "#FFD166",
          dark: "#FB8500",
        },
        neutral: {
          light: "#F8FAFC",
          DEFAULT: "#E2E8F0",
          dark: "#1E293B",
        },
      },
      fontFamily: {
        arabic: ["Cairo", "sans-serif"],
        english: ["Poppins", "sans-serif"],
      },
    },
  },
  
  plugins: ["@tailwindcss/postcss"],
};

export default config;
