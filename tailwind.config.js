/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // აქ ვამატებთ ჩვენს პერსონალურ ფერებს
      colors: {
        primary: '#1E3A5F', // ელეგანტური მუქი ლურჯი
        accent: '#F59E0B',  // თბილი ოქროსფერი/ნარინჯისფერი აქცენტებისთვის
      }
    },
  },
  plugins: [],
}