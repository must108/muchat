import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        byzantium: "#74226C",
        byzantshade: "#5C1B56",
        bgcolor: "#946590",
        compGreen: "#659469",
        compGreenShade: "#507654"
      }
    },
  },
  plugins: [],
} satisfies Config;
