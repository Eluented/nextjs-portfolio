/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xxxs": "300px",
      "bannerPadding": "394px",
      "xxs": "430px",
      "xs": "480px", 
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "tablet": "1140px",
      "navShow": "1200px",
      "xl": "1280px",
      "xxl": "1360px",
      "xxxl": "1460px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        'instagram': '#c13584',
        'github': '#333',
        'linkedin': '#0077b5',
      },
      inset: {
        "17": "68px",
        "26": "104px",
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
