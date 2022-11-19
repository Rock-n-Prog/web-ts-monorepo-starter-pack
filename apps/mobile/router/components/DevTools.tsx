import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@acme/mobile-ui/components/inputs';
import { useThemeContext } from '@acme/mobile-ui/hooks/useThemeContext';
import { Stack } from '@acme/mobile-ui/components/layouts';
import { useLocaleContext } from '@acme/mobile-locales/hooks/useLocaleContext';

function DevTools() {
  const { t } = useTranslation();
  const { locale, changeLocale } = useLocaleContext();
  const { switchMode } = useThemeContext();

  function switchLocale() {
    return changeLocale(locale === 'en' ? 'fr' : 'en');
  }

  return (
    <Stack direction="row">
      <Button text={t('language')} onPress={switchLocale} />
      <Button text={t('theme')} onPress={switchMode} />
    </Stack>
  );
}

export default DevTools;
