const path = require('path');

module.exports = {
  root: true,
  extends: ['@acme/eslint-config/react-native-library.js', 'plugin:i18n-json/recommended'],
  rules: {
    'i18n-json/valid-message-syntax': [
      'error',
      {
        syntax: 'non-empty-string',
      },
    ],
    'i18n-json/valid-json': 'error',
    'i18n-json/sorted-keys': [
      'warn',
      {
        order: 'asc',
        indentSpaces: 2,
      },
    ],
    'i18n-json/identical-keys': [
      'error',
      {
        filePath: {
          'common.json': path.resolve('./translations/en/common.json'),
          'forms.json': path.resolve('./translations/en/forms.json'),
          'home.json': path.resolve('./translations/en/home.json'),
          'hello.json': path.resolve('./translations/en/hello.json'),
          'users.json': path.resolve('./translations/en/users.json'),
        },
      },
    ],
  },
};
