/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./app/**/*.{vue,js,ts,jsx,tsx}", // Update this according to your folder structure
    "./assets/**/*.{vue,js,ts,jsx,tsx}", // If you have any other relevant directories
  ],
  theme: {
    extend: {
      colors: {
        "prussian-blue": "var(--prussian-blue)",
        "fire-engine-red": "var(--fire-engine-red)",
        "orange-wheel": "var(--orange-wheel)",
        xanthous: "var(--xanthous)",
        vanilla: "var(--vanilla)",
        "custom-green": "(--custom-green)",
        black: "var(--black)",
        "aerospace-orange": "var(--aerospace-orange)",
        gold: "var(--gold)",
        snow: "var(--snow)",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"], // Add a "display" font utility
        bodyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
