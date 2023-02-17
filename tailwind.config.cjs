/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        // global colors
        background: "#e8ebf2",
        "dark-background": "#101010",
        border: "#d4d4d8",
        "dark-border": "#F8FAFC24",
        "faded-gray": "#374151C8",
        "faded-white": "#F9FAFBC6",

        // brand-color
        "brand-color": "#0d9488",

        // body text colors
        body: "#71717a",
        "dark-body": "#a3a3a3",

        "dark-card-background": "#171717",
        "dark-nav-background": "#151515",
        "dark-nav": "#e3dbd3",

        // sub-title
        "sub-title": "#111827",
        "dark-sub-title": "#fafafa",

        // teritiary-link
        "teritiary-link": "#2563eb",
        "dark-teritiary-link": "#60a5fa",
      },
      fontFamily: {
        name: ["Roboto", "sans-serif"],
        title: ["Roboto", "sans-serif"],
        chips: ["Roboto", "sans-serif"],
        body: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
