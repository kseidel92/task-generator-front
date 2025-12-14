import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

/**
 * Configuração completa do ESLint no formato Flat Config.
 * Inclui regras para JavaScript, TypeScript, React, Next.js, Acessibilidade e Prettier.
 */
export default [
  // 1. Configurações base
  {
    // Ignorar arquivos de build e de configuração
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
      "**/*.js", // Ignorar arquivos JS na raiz, pois o projeto é TS
    ],
  },

  // 2. Configuração para arquivos TypeScript e React
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "@next/next": nextPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // Regras JavaScript base
      ...js.configs.recommended.rules,

      // Regras TypeScript
      ...ts.configs["eslint-recommended"].rules,
      ...ts.configs.recommended.rules,
      ...ts.configs["recommended-requiring-type-checking"].rules,
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/unbound-method": "off",
      
      // Regras React
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // Next.js não precisa disso

      // Regras React Hooks
      ...reactHooks.configs.recommended.rules,

      // Regras JSX A11y
      ...jsxA11y.configs.recommended.rules,

      // Regras Next.js
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // Regras Prettier (garante que o Prettier seja executado como regra)
      "prettier/prettier": "error",
    },
  },

  // 3. Configuração Prettier (desabilita regras conflitantes)
  prettierConfig,
];
