import * as React from 'react';
import { Button } from "mobile-ui/components/inputs";
import { useThemeContext } from "mobile-ui/hooks/useThemeContext";
import { useTranslation } from "react-i18next";

// TODO: Stack, horizontal
// TODO: Toolbar should be a dev tools menu (side panel/blade)
function Toolbar() {
  const {t} = useTranslation();
  const { switchMode } = useThemeContext();

  // TODO: Switch language
  return (
    <>
      <Button text={t('language')} onPress={switchMode} />
      <Button text={t('theme')} onPress={switchMode} />
    </>
  );
}

export default Toolbar;
