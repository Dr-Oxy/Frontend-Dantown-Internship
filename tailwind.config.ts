import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainwhite: "#F7FAFC",
        darkBlue: "#0F3F62",
        gray1: "#8695A0",
        gray2: "#EBEFF1",
      },
      height: {
        mainHeight: "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
