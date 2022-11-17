// To be used alongside a primary eslint config extension
module.exports = {
  extends: ['plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'functional/immutable-data': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
