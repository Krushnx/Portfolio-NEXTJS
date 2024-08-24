const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}", // Added for completeness
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-gradient': 'linear-gradient(90deg, rgba(33,32,43,1) 22%, rgba(0,0,0,1) 80%)',
      },
      colors: {
        linkColor: '#AAA6C3', // Custom link color
        'custom-gray': 'rgb(79,79,79)',
        'custom-black': 'rgb(0,0,0)',
        'Purple': '#8000ff',
        'Purple-2': '#6900d3',
        'Purple-3': '#FFFF2E',
        'tagColor': '#191f3d',
        'tagBg': '#0f152e',
        'Title-1': '#3d8bea',
        'Title-2': '#e00000',
        'Border': '#212222',
        'tagBg-2': '#251b4a',
      },
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
        'handwriting': ['"Dancing Script"', 'cursive'],
        'summery': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'openSans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'monospace': ['Courier New', 'monospace'],
        'display': ["Playfair Display"],
        'slab': ['"Roboto Slab"', 'serif'],
        'fantasy': ['Papyrus', 'fantasy'],
        'code': ['Source Code Pro', 'monospace'],
        'kanit': ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
