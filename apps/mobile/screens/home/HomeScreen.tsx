import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle, SubTitle } from "mobile-ui/components/typography";
import { Button } from 'mobile-ui/components/inputs';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import { useTranslation } from 'react-i18next';
import useNavigationOption from '../../hooks/useNavigationOptions';
import useRootStackNavigation from '../../router/hooks/useRootStackNavigation';

function HomeScreen() {
  const { t } = useTranslation('home');
  const { goToHelloScreen, goToUsersScreen } = useRootStackNavigation();

  useNavigationOption({
    headerTitle: () => (<HeaderTitle>{t('home')}</HeaderTitle>),
  });

  return (
    <SafeAreaView>
      <Screen>
        <Stack>
          <Button text={t('hoToHelloScreen')} onPress={goToHelloScreen} />
          <Button text={t('goToUsersScreen')} onPress={goToUsersScreen} />
        </Stack>
      </Screen>
    </SafeAreaView>
  );
}

export default HomeScreen;
