/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      xxss: "280px",
      // => @media (min-width: 280px) { ... }
      xxs: "300px",
      // => @media (min-width: 300px) { ... }
      xms: "320px",
      // => @media (min-width: 320px) { ... }
      xls: "380px",
      // => @media (min-width: 380px) { ... }
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "700px",
      // => @media (min-width: 768px) { ... }
      tablet: "800px",
      // => @media (min-width: 800px) { ... }
      sl: "940px",
      // => @media (min-width: 940px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xlg: "1180px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#00AEFF",
        secondary: "#A8A8A8",
        lightBlack: "#4F4F4F",
        noghreiSilver: "#bdbdbd",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero-image.png')",
      },

      gridTemplateColumns: {
        "auto-fit-240": "repeat(auto-fit, 240px)",
        "auto-fit-300": "repeat(auto-fit, 300px)",
      },
    },
  },
  plugins: [],
};
