/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark"],
  },
};



//////////////////////////////

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   plugins: [require('daisyui')],
//   daisyui: {
//     themes: ["light", "dark"],
//   },
//   theme: {
//     extend: {
//       animation: {
//         scroll: 'scroll 20s linear infinite',
//         'scroll-reverse': 'scroll 20s linear infinite reverse',
//       },
//       keyframes: {
//         scroll: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//     },
//   },
// }
