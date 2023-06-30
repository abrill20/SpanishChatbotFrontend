// tailwind config
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        mercuryTypingAnimation: {
          '0%':  {
             transform: 'translateY(0px)',
             'background-color': '#6CAD96'
          },
          '28%':{
            transform: 'translateY(-7px)',
            'background-color':'#9ECAB9'
          },
          '44%': {
            transform: 'translateY(0px)',
            'background-color': '#B5D9CB'
          }
        }
      },
      animation: {
        'mercury-typing-animation': 'mercuryTypingAnimation 1.8s infinite ease-in-out'
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
