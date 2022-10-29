import * as fs from 'fs';
import { locales } from '../../../types/locales';
import { namespaces } from '../../../types/namespaces';

// TODO: Add jest eslint plugin
describe('locales', () => {
  describe('Given all locales', () => {
    const localeDirectories = fs.readdirSync('public/locales').filter(file => !file.startsWith('__'));

    describe('When checking that all locales are listed in types', () => {
      test('Then all locales are listed in types', () => {
        expect(localeDirectories).toEqual(locales);
      });
    });

    describe('Given all namespaces', () => {
      const namespaceFiles = localeDirectories.reduce<Record<string, string[]>>((acc, locale) => {
        acc[locale] = fs.readdirSync(`public/locales/${locale}`);
        return acc;
      }, {});

      describe('When checking that all namespaces are listed in types', () => {
        test('Then all namespaces are listed in types', () => {
          localeDirectories.forEach(locale => {
            namespaces.forEach(namespace =>
              expect(namespaceFiles[locale].map(namespaceFile => namespaceFile.replace('.json', ''))).toContain(
                namespace,
              ),
            );
          });
        });
      });

      describe('When checking that all namespaces have the same translation keys', () => {
        const keys = Object.keys(namespaceFiles).reduce<Record<string, Record<string, string[]>>>(
          (accLocales, locale) => {
            accLocales[locale] = namespaceFiles[locale].reduce<Record<string, string[]>>((accNamespaces, namespace) => {
              accNamespaces[namespace] = Object.keys(
                JSON.parse(fs.readFileSync(`public/locales/${locale}/${namespace}`, 'utf8')),
              );
              return accNamespaces;
            }, {});
            return accLocales;
          },
          {},
        );

        test('Then all namespaces have the same translation keys', () => {
          locales.slice(1).forEach(locale => {
            expect(keys[locale]).toStrictEqual(keys[locales[0]]);
          });
        });
      });
    });
  });
});
