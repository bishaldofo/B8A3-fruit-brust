/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
      maxWidth: {
        'custom': '1440px', // Add your custom max-width value here
      },
     },
   },
   plugins: [],
 }