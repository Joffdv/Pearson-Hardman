/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#d92123',
        'primaryTextColor': '#fff',
        'secondaryTextColor': '#191919',
        'secondaryColor': '#868686',
        'tertiaryColor': '#eff3f4',
        'secondaryBgColor': '#5c1011',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/hero-pattern.svg')",
        'main-banner-4': "url('/main_banner4.png')",
      }
    },
  },
  plugins: [],
}