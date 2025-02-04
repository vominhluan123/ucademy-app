import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0F0F0F",
          card: "#18181B",
          border: "#27272A",
          text: "#E4E4E7",
          secondary: "#A1A1AA",
          hover: "#1E1E22",
        },
        primary: "#3B82F6",
      },
      fontFamily: {
        primary: ["var(--font-manrope)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
