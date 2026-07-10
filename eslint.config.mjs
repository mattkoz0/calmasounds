import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Editorial pages contain natural punctuation in eight languages. Escaping
      // every apostrophe does not change the rendered HTML or accessibility.
      "react/no-unescaped-entities": "off",
      // The localized legacy pages intentionally use crawlable plain anchors.
      // They are progressively migrated to the typed next-intl Link component.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);

export default eslintConfig;
