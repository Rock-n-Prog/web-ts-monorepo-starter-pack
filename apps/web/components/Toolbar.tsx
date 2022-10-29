import { Button } from 'web-ui/components/inputs';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';
import { useTranslation } from 'next-i18next';
import { useTranslationContext } from '../hooks/useTranslationContext';

// TODO: Enhance Toolbar a bit
function Toolbar() {
  const { switchMode } = useThemeContext();
  const { t } = useTranslation();
  const { locale, changeLocale } = useTranslationContext();

  function switchLocale() {
    changeLocale(locale === 'en' ? 'fr' : 'en');
  }

  return (
    <>
      <Button onClick={switchMode}>{t('switchThemeMode')}</Button>
      <Button onClick={switchLocale}>{t('switchLocale')}</Button>
    </>
  );
}

export { Toolbar };
