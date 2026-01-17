/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // DaisyUI config
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave"],
  },

  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes", "cursive"],
      },

      colors: {
        primary: "#00eeff",
        secondary: "#ff4ecd",
        accent: "#7c3aed",
      },

      boxShadow: {
        neon: "0 0 40px rgba(0,238,255,0.6)",
        glow: "0 0 60px rgba(255,78,205,0.6)",
      },

      animation: {
        "spin-slow": "spin 16s linear infinite",
        "reverse-spin": "reverseSpin 22s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 10s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },

      keyframes: {
        reverseSpin: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },

  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
