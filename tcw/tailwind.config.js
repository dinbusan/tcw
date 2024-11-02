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
    extend: {},
  },
  plugins: [],
};
