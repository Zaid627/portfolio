// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// export default config;


export default {
  //...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
