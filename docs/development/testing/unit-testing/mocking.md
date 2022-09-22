# Mocking

Since mocking with jest can sometimes be quite harsh, here's a list of mocking cases that might help. Feel free to add
your own over time.

## `import { someFunction } from 'somePath'`

TODO: Review this mocking scenario with actual code from the codebase

```ts
// Subject file
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Locale, Namespace } from '../types/i18n';

type Props = {
  locale: Locale;
  namespaces: Namespace[];
};

function getServerSideTranslations({ locale, namespaces }: Props) {
  return serverSideTranslations(locale, namespaces);
}

export default getServerSideTranslations;

// Test file
import { Namespace } from '../../types/i18n';

const stubServerSideTranslations = 'dummyValue';
const mockServerSideTranslations = jest.fn().mockResolvedValue(stubServerSideTranslations);

jest.mock('next-i18next/serverSideTranslations', () => ({
  __esModule: true,
  serverSideTranslations: mockServerSideTranslations,
}));

// TODO: Necessary for mock to work, but imports should be first
import getServerSideTranslations from '../getServerSideTranslations';

describe('getServerSideTranslations', () => {
  describe('Given locale and namespaces', () => {
    const locale = 'en';
    const namespaces: Namespace[] = ['common'];

    test('Then get server side translations', async () => {
      const serverSideTranslations = await getServerSideTranslations({ locale, namespaces });

      expect(serverSideTranslations).toBe(stubServerSideTranslations);
      expect(mockServerSideTranslations).toHaveBeenCalledWith(locale, namespaces);
    });
  });
});
```
