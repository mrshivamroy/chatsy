import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend the base Next.js and TypeScript configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Ignore specific directories
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Add your custom rule here
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
