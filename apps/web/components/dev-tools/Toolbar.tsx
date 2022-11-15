import { Button } from 'web-ui/components/inputs';
import { useThemeContext } from 'web-ui/hooks/useThemeContext';
import { useTranslation } from 'next-i18next';
import { Flex } from 'web-ui/components/layouts';
import { useTranslationContext } from '../../hooks/useTranslationContext';

function Toolbar() {
  const { switchMode } = useThemeContext();
  const { t } = useTranslation();
  const { locale, changeLocale } = useTranslationContext();

  function switchLocale() {
    changeLocale(locale === 'en' ? 'fr' : 'en');
  }

  return (
    <Flex justifyContent="end" margin="m">
      <Button onClick={switchMode}>{t('switchThemeMode')}</Button>
      <Button onClick={switchLocale}>{t('switchLocale')}</Button>
    </Flex>
  );
}

export { Toolbar };
