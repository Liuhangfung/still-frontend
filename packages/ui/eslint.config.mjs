import { nextjsConfig } from "@still/eslint-config";

const config = [
  ...nextjsConfig,
  // A component library has no pages directory.
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
];

export default config;
