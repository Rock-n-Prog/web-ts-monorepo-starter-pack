import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'mobile-ui/components/inputs';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import { Stack } from 'mobile-ui/components/layouts';
import { useTranslationContext } from '../../hooks/useTranslationContext';

function Toolbar() {
  const { t } = useTranslation();
  const { locale, changeLocale } = useTranslationContext();
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

export default Toolbar;
