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
        mainwhite: "#F7FAFC",
        darkBlue: "#0F3F62",
        gray1: "#8695A0",
        gray2: "#EBEFF1",
        ligthBlue: "#E0F3F3",
        cyan: "#54BCBD",
        cyan2: "#3DEBF6",
        cyan4: "#5DC2C4",
        lightCyan: "#DAFDFF",
        lightGreen: "#E7F7F8",
        lightRed: "#FFECE8",
        red: "#F4694C",
        cyan3: "#54BCBD",
        ligthBlue2: "#D9EDFF",
        lightRed2: "#FFDAD9",
        lightPurple: "#D9DAFF",
      },
      height: {
        mainHeight: "calc(100vh - 135px)",
      },
      backgroundImage: {
        "link-linear":
          "linear-gradient(90.14deg, rgba(84, 188, 189, 0.5), rgba(84, 188, 189, 0.2) 99.89%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
