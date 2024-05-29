/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        mobile: { 'max': "767px" },
      },
      animation: {
        marquee: "marquee 2s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform:
              "translateX(calc(-100% - clamp(0.75rem, 0.2237rem + 2.6316vw, 2rem)))",
          },
        },
      },
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
