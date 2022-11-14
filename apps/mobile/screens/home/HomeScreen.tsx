import * as React from 'react';
import { HeaderTitle } from 'mobile-ui/components/typography';
import { Button } from 'mobile-ui/components/inputs';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { useTranslation } from 'react-i18next';
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
