// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#fff7f9',
            100: '#ffeaf0',
            200: '#ffd3df',
            300: '#ffadc3',
            400: '#ff7fa2',
            500: '#ff4f82', // strawberry
            600: '#e0386c',
            700: '#bb2e58',
            800: '#962547',
            900: '#781f3a'
          },
          mint: {
            50: '#f3fdf7',
            100: '#d9f7e7',
            200: '#b4efd2',
            300: '#86e4b8',
            400: '#52d79a',
            500: '#2cc984', // mint
            600: '#1fa86c',
            700: '#1a8658',
            800: '#176b49',
            900: '#14583d'
          }
        }
      }
    },
    plugins: []
  };
  