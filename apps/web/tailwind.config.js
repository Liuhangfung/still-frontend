import preset from "@still/tailwind-config";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
};

export default config;
