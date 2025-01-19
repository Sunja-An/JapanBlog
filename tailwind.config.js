/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "japanblog-gradient":
          "linear-gradient(180deg, #FFFAFA 0%, #EDE8E2 30%)",
      },
      fontFamily: {
        ["pretendard"]: "pretendard",
      },
    },
  },
  plugins: [],
};
