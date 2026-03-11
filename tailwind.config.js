/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#feefe7',
          100: '#fcdfcf',
          200: '#f9be9f',
          300: '#f79e6e',
          400: '#f47e3e',
          500: '#f15d0e',  // Main orange - your brand color
          600: '#c14b0b',
          700: '#913808',
          800: '#602506',
          900: '#301303',
          950: '#220d02',
        },
        secondary: {
          50: '#eaf1fa',
          100: '#d5e2f6',
          200: '#acc6ec',
          300: '#82a9e3',
          400: '#598cd9',
          500: '#2f6fd0',  // Tech blue
          600: '#2659a6',
          700: '#1c437d',
          800: '#132d53',
          900: '#09162a',
          950: '#07101d',
        },
        accent: {
          50: '#fef6e7',
          100: '#fdedce',
          200: '#fbda9d',
          300: '#f9c86c',
          400: '#f7b53b',
          500: '#f5a30a',  // Honey bronze
          600: '#c48208',
          700: '#936206',
          800: '#624104',
          900: '#312102',
          950: '#221701',
        },
        neutral: {
          50: '#f1f2f3',
          100: '#e4e5e7',
          200: '#c8cbd0',
          300: '#adb1b8',
          400: '#9297a0',
          500: '#777d88',  // Platinum - for text/borders
          600: '#5f646d',
          700: '#474b52',
          800: '#2f3237',
          900: '#18191b',
          950: '#111113',
        },
        dark: {
          50: '#f1f3f3',
          100: '#e4e6e7',
          200: '#c8ced0',
          300: '#adb5b8',
          400: '#929ca0',
          500: '#778388',  // Gunmetal - for dark backgrounds
          600: '#5f696d',
          700: '#474f52',
          800: '#2f3537',
          900: '#181a1b',
          950: '#111213',
        },
      },
    },
  },
  plugins: [],
}

