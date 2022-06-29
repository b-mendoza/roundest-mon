/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: [
    `./src/pages/**/*.{js,ts,jsx,tsx}`,
    `./src/components/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = tailwindConfig;
