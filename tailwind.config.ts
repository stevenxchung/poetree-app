import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-slow": "fade-in 3s ease-in-out",
      },
      backgroundImage: {
        aman: "url('/background/aman.jpg')",
        amanGray: "url('/background/aman-grayscale.jpg')",
      },
      colors: {
        "custom-content": "#d99f7e",
        "custom-div": "#404040",
      },
      transitionDuration: {
        "10s": "10000ms",
      },
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
  },
  plugins: [],
} satisfies Config;
