/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#3B3B3B",
        "primary-black": "#2D2D2D",
      },
      screens: {
        "max-4xl": { raw: "(max-width: 1920px)" },
        "max-3xl": { raw: "(max-width: 1800px)" },
        "max-2xl": { raw: "(max-width: 1536px)" },
        "max-xl": { raw: "(max-width: 1279px)" },
        "max-lg": { raw: "(max-width: 1023px)" },
        "max-md": { raw: "(max-width: 767px)" },
        "max-sm": { raw: "(max-width: 576px)" },
        "max-xs": { raw: "(max-width: 375px)" },
      },
    },
  },
  plugins: [],
};
