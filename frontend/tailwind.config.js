/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "main": "rgba(34, 34, 96, 1)",
            "primary1": "#222260",
            "primary2": "rgba(34, 34, 96, .6)",
            "primary3": "rgba(34, 34, 96, .4)",
            "primary4": "rgba(34, 34, 96, .9)",
            "content": "rgba(252, 246, 249, 0.78)",
            "add": "rgb(252, 246, 249)",
            "green": "#42AD00",
            "grey": "#aaa",
            "accent": "#F56692",
            "accent1": "#FF6692",
            "delete": "#FF0000",
        },
        backgroundImage: {
            "orb": "linear-gradient(180deg, #F56692 0%, #F2994A 100%)",
            "home": "linear-gradient(90deg, rgba(249,237,247,1) 0%, rgba(251,240,252,1) 100%)",
        },
        fontFamily: {
            'roboto': ['Roboto', 'sans-serif'],
        },
        fontSize: {
            "clamp": "0.8rem",
        }
    },

  },
  plugins: [],
}

