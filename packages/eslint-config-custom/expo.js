module.exports = {
  extends: ['./react.js', './node.js'],
  parser: '@babel/eslint-parser',
  settings: {
    'import/ignore': ['react-native'],
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
  },
};
