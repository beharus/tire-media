/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{html,js}',
    './src/**/*.{js,ts,svelte,vue}',
  ],
  theme: {
    extend: {
      colors:{
        "black": '#010101'
      },
      maxWidth: {
        "2xl": "104rem"
      },
      screens: {
        '3xl': '1700px', // ✅ correct
      },
    },
  },
  plugins: [],
}
