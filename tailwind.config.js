/** @type {import('tailwindcss').Config} */
/** @type {import('tailwind-scrollbar')} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [import("tailwind-scrollbar")],
};
