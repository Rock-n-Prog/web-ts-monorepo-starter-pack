import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocaleContext } from '@acme/mobile-locales/hooks/useLocaleContext';
import { Button } from 'mobile-ui/components/inputs';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import { Stack } from 'mobile-ui/components/layouts';

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
