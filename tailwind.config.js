
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        keyframes: {
          'loop-scroll':{
            from: {transform: 'translateX(0)'},
            to: {transform: 'translateX(-100%)'},
          },
          'bounce-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        }
        },
        animation: {
          'loop-scroll': 'loop-scroll 50s linear infinite',
          'bounce-right': 'bounce-right 0.8s ease-in-out infinite'
          
        },
      },
    },
    plugins: [],
  }