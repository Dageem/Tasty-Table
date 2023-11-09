/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  
  theme: {
    extend: {
      fontFamily: {
          'cursive': ['Dancing Script', 'cursive']
        },
      fontSize: {
        'giant': '10rem', // or any other size you prefer
      },
      screens: {

      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(at top, var(--tw-gradient-stops))',
        // ... you can add more gradient styles if needed ...
      })
    },
    // plugins: [
    //   function({ addUtilities }) {
    //     const newUtilities = {
    //       '.diagonal-stripes': {
    //         backgroundImage: 'repeating-linear-gradient(45deg, #000000 0, #000000 10px, #ff0000 10px, #ff0000 20px, #0000ff 20px, #0000ff 30px)',
    //       },
    //     }
    //     addUtilities(newUtilities)
    //   }
    // ],
  },

  // variants: {},
  // plugins: [],
});
