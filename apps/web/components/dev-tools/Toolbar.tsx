import { useTranslation } from 'next-i18next';
import { Button } from '@acme/web-ui/components/inputs';
import { useThemeContext } from '@acme/web-ui/hooks/useThemeContext';
import { Flex } from '@acme/web-ui/components/layouts';
import { useLocaleContext } from '../../hooks/useLocaleContext';

function Toolbar() {
  const { switchMode } = useThemeContext();
  const { t } = useTranslation();
  const { locale, changeLocale } = useLocaleContext();

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
