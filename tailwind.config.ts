import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: "1024px",
    },
    extend: {
      fontSize: {
        xxs: "0.625rem",
        xxxs: "0.5rem",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        "playfair-display": ["var(--font-playfair-display)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#355F2E",
        secondary: "#B3E8CE",
        yellow: "#F5D300",
        "light-yellow": "#F1E6A8",
        red: "#EB4335",
        "light-red": "#FFDBDB",
        "dark-gray": "#5B5B5B",
        gray: "#D9D9D9",
        "light-gray": "#F3F3F3",
        "gray-300": "#D9D9D9",
        "dark-green": "#274A21",
        "green-accent": "#76BF9B",
      },
    },
  },
  plugins: [],
});
