// @still/tailwind-config: Still v2 classical brand tokens (docs/brand-colors.md) as a Tailwind preset.

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        ivory: "#F5F2EB",
        paper: "#FAF8F3",
        ink: { DEFAULT: "#20201D", soft: "#3D3A33" },
        // Antique gold is for fills, bars and borders only; use gold-text for words.
        gold: { DEFAULT: "#B69A64", text: "#76654B", wash: "#EEE8DB" },
        sky: { DEFAULT: "#AABAC4", wash: "#E7ECEC" },
        stone: { DEFAULT: "#DAD8D2", deep: "#E9E5DC", warm: "#E6E1D7" },
        line: "#D7D2C7",
        lead: "#59554F",
        muted: "#656159",
        focus: "#627784",
        night: "#242724",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 28px rgba(78, 64, 56, 0.06)",
        phone: "20px 26px 54px rgba(48, 42, 34, 0.13)",
        float: "0 20px 50px rgba(0, 0, 0, 0.2)",
      },
      maxWidth: {
        site: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
