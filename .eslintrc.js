module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["@typescript-eslint", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "warn",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};