module.exports = {
  plugins: ["functional"],
  extends: [
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    "prettier",
    "next",
    "turbo"
  ],
  rules: {
    'functional/no-class': 'error',
    'functional/no-return-void': 'off',
    'functional/no-expression-statement': 'off',
    'functional/functional-parameters': 'off',
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
