/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        
      },
      boxShadow: {

      },
      screens: {
        ss: "300px",
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        "hero-site": "url('/src/assets/dashboard-bg-dark.png')",
      },
    },
  },
  plugins: [],
}

