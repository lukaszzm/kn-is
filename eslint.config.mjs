// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
];
