import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderTitle } from '@acme/mobile-ui/components/typography';
import { Button } from '@acme/mobile-ui/components/inputs';
import { Screen, Stack } from '@acme/mobile-ui/components/layouts';
import useNavigationOption from '../../hooks/useNavigationOptions';
import useRootStackNavigation from '../../router/hooks/useRootStackNavigation';

function HomeScreen() {
  const { t } = useTranslation('home');
  const { goToHelloScreen, goToUsersScreen, goToAddUserScreen } = useRootStackNavigation();

  useNavigationOption({
    headerTitle: () => <HeaderTitle>{t('home')}</HeaderTitle>,
  });

  return (
    <Screen>
      <Stack>
        <Button text={t('goToHelloScreen')} onPress={goToHelloScreen} />
        <Button text={t('goToUsersScreen')} onPress={goToUsersScreen} />
        <Button text={t('goToAddUserScreen')} onPress={goToAddUserScreen} />
      </Stack>
    </Screen>
  );
}

export default HomeScreen;
