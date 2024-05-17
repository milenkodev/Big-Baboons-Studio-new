/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#F3F3F3",
        black: "#1C1C1C",
        accent: "#D31B30",
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        atk: ["Atkinson Hyperlegible", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
