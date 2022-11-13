import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'mobile-ui/components/inputs';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import { Stack } from 'mobile-ui/components/layouts';

// TODO: Toolbar should be a dev tools menu (side panel/blade)
function Toolbar() {
  const {t} = useTranslation();
  const { switchMode } = useThemeContext();

  // TODO: Switch language
  return (
    <Stack direction="row">
      <Button text={t('language')} onPress={switchMode} />
      <Button text={t('theme')} onPress={switchMode} />
    </Stack>
  );
}

export default Toolbar;
