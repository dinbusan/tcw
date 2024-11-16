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
      },
    },
  },
  plugins: [],
};
