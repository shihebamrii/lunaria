/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
      ],
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'twinkle': 'twinkle 4s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            twinkle: {
              '0%, 100%': { opacity: '0.3' },
              '50%': { opacity: '1' },
            }
          }
        },
      },
      plugins: [],
    }