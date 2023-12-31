/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        "main": "rgba(34, 34, 96, 1)",
        "primary1": "#222260",
        "primary2": "rgba(34, 34, 96, .6)",
        "primary3": "rgba(34, 34, 96, .4)",
        "sidebar": "rgba(252, 246, 249, 0.78)",
        "green": "#42AD00",
        "grey": "#aaa",
        "accent": "#F56692",
        "delete": "#FF0000",
        "white": "#FFFFFF"
    },
    backgroundImage: {
        "orb": "linear-gradient(180deg, #F56692 0%, #F2994A 100%)",
        "home": "url('./src/img/bg.png')",
    },
    fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
    },
    fontSize: {
        "clamp": "clamp(0.8rem, 1.5vw, 1rem)",
    }

  },
  plugins: [],
}

