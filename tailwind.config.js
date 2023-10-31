/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        
      },
      boxShadow: {

      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-site": "url('/src/assets/dashboard-bg-dark.png')",
      },
    },
  },
  plugins: [],
}

