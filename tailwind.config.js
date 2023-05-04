/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'jvpink': '#e30713',
        'jvblue': '#26348c',
        'txblack': '#000000d7',
        'litblackm': '#212121FF',
        'litblack': '#121212',
        // 'litblack': '#333333FF',
        'litlight': '#FFFFF7',
        'searchwhite': '#f1f1f2',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      extend: {
      }
    },
  plugins: [],
}

