import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { HeaderButtonProps } from '@react-navigation/native-stack/src/types';
import { Button } from '@acme/mobile-ui/components/inputs';
import { useTranslation } from 'react-i18next';

function BackButton({ canGoBack }: HeaderButtonProps) {
  const { t } = useTranslation();
  const { goBack } = useNavigation();

  return canGoBack ? <Button variant="text" text={t('back')} onPress={goBack} /> : null;
}

export default BackButton;
