module.exports = {
  root: true,
  extends: ['@acme/eslint-config/react-native-library.js'],
  rules: {
    // Weird fix for react plugin not working
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React',
      },
    ],
  },
};
