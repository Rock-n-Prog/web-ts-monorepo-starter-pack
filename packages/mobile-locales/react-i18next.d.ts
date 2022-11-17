import 'react-i18next';
import common from './translations/en/common.json';
import forms from './translations/en/forms.json';
import home from './translations/en/home.json';
import hello from './translations/en/hello.json';
import users from './translations/en/users.json';

// If editing here, remember to check defaults in 'types' directory
declare module 'react-i18next' {
  /* eslint-disable-next-line prefer-type-alias/prefer-type-alias,no-unused-vars */
  interface CustomTypeOptions {
    readonly defaultNs: 'common';
    readonly resources: {
      readonly common: typeof common;
      readonly forms: typeof forms & typeof common;
      readonly home: typeof home & typeof common;
      readonly hello: typeof hello & typeof common;
      readonly users: typeof users & typeof common;
    };
  }
}
