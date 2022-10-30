const path = require('path');

module.exports = {
  root: true,
  extends: ['custom/next.js', 'plugin:i18n-json/recommended'],
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
          'common.json': path.resolve('./public/locales/en/common.json'),
          'hello.json': path.resolve('./public/locales/en/hello.json'),
          'index.json': path.resolve('./public/locales/en/index.json'),
          'users.json': path.resolve('./public/locales/en/users.json'),
        },
      },
    ],
  },
};
