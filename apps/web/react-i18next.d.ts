import 'react-i18next';
import common from 'web-locales/translations/en/common.json';
import index from 'web-locales/translations/en/index.json';
import hello from 'web-locales/translations/en/hello.json';
import users from 'web-locales/translations/en/users.json';

// If editing here, remember to check defaults in 'types' directory
declare module 'react-i18next' {
  /* eslint-disable-next-line prefer-type-alias/prefer-type-alias,no-unused-vars */
  interface CustomTypeOptions {
    readonly defaultNs: 'common';
    readonly resources: {
      readonly common: typeof common;
      readonly index: typeof index & typeof common;
      readonly hello: typeof hello & typeof common;
      readonly users: typeof users & typeof common;
    };
  }
}
