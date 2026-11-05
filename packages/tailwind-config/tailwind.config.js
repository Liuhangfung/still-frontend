// @still/tailwind-config: Still brand tokens (docs/brand-colors.md) as a Tailwind preset.

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: "#0FA3A3", dark: "#064E4E", mid: "#3AB7B7", light: "#7DCFCF" },
        gold: { DEFAULT: "#FFC300", soft: "#FFF4CC", paper: "#FFFCEF" },
        ink: "#111111",
        cream: "#FFF6DC",
        coral: "#FF5A4E",
        app: { bg: "#072B2F", panel: "#0D3B40", muted: "#8FB9BB" },
        tint: { DEFAULT: "#EAF7F7", 2: "#F5FBFB", 3: "#DCEFEF" },
        muted: "#4B5F62",
        line: "#DCE8E8",
        footer: "#F4F7F7",
        grade: { a: "#FFC300", b: "#0FA3A3", c: "#A9B6B9", d: "#9A7BE0", e: "#FF5A4E" },
      },
      fontFamily: {
        display: ["var(--font-bangers)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        comic: "6px 6px 0 #111111",
        "comic-md": "4px 4px 0 #111111",
        "comic-sm": "3px 3px 0 #111111",
        "comic-lg": "6px 6px 0 #111111",
        soft: "0 1px 2px rgba(0,0,0,.04), 0 12px 32px -12px rgba(6,78,78,.18)",
      },
      maxWidth: {
        site: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
