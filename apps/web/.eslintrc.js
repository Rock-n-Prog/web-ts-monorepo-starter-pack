module.exports = {
  root: true,
  extends: ['@acme/eslint-config/next.js'],
  rules: {
    // TODO: Move tsconfig baseUrl and this rule to base configs
    'no-restricted-imports': ['warn', { patterns: ['.*'] }],
  },
};
