import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "1074px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        linearground: "linear-gradient(to bottom, #FFFAFA 0%, #EDE8E2 30%)",
      },
      fontFamily: {
        pretendardJP: "var(pretendard-JP)",
        pretendard: "var(pretendard-Regular)",
      },
    },
  },
  plugins: [],
} satisfies Config;
