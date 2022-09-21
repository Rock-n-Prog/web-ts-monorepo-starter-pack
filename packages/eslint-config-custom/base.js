module.exports = {
  plugins: ["functional"],
  extends: [
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'eslint:recommended',
    "prettier",
    "turbo"
  ],
  rules: {
    'functional/no-class': 'error',
    'functional/no-return-void': 'off',
    'functional/no-expression-statement': 'off',
    'functional/functional-parameters': 'off',
  },
};
