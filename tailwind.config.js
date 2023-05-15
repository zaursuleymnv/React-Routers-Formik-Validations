/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   safelist: [
//       'tw-bg-blue-800/75',
//       {
//           pattern: /(bg|text)-(blue)-(800)/,
//           variants: ['hover'],
//       },
//   ],
//   theme: {
//       extend: {},
//   },
//   corePlugins: {
//       preflight: false,
//   },
//   plugins: [],
// }

// module.exports = {
//   content: ["./**/*.html"],
//   prefix: "tw-",
//   important: true,
//   corePlugins: {
//       preflight: false,
//   }
// }

