# Mocking

Since mocking with jest can sometimes be quite harsh, here's a list of mocking cases that might help. Feel free to add
your own over time.

## `import { someFunction } from 'somePath'`

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
import getServerSideTranslations from '../getServerSideTranslations';

jest.mock('next-i18next/serverSideTranslations');

const stubServerSideTranslations = 'dummyValue';

describe('getServerSideTranslations', () => {
  describe('Given locale and namespaces', () => {
    const locale = 'en';
    const namespaces: Namespace[] = ['common'];

    test('Then get server side translations', async () => {
      (getServerSideTranslations as jest.Mock).mockImplementation(() => stubServerSideTranslations);

      const serverSideTranslations = await getServerSideTranslations({ locale, namespaces });

      expect(serverSideTranslations).toBe(stubServerSideTranslations);
      expect(getServerSideTranslations).toHaveBeenCalledWith(locale, namespaces);
    });
  });
});
```
