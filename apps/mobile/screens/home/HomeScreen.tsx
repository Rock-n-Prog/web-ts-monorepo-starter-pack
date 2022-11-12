import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle, SubTitle } from "mobile-ui/components/typography";
import { Button } from 'mobile-ui/components/inputs';
import { Screen, Stack } from 'mobile-ui/components/layouts';
import useNavigationOption from '../../hooks/useNavigationOptions';
import useRootStackNavigation from '../../router/hooks/useRootStackNavigation';

function HomeScreen() {
  const { goToHelloScreen, goToUsersScreen } = useRootStackNavigation();

  useNavigationOption({
    headerTitle: () => (<HeaderTitle>Home</HeaderTitle>),
  });

  return (
    <SafeAreaView>
      <Screen>
        <Stack>
          <SubTitle>Page to test navigation and theme</SubTitle>
          <Button text="Go to hello screen" onPress={goToHelloScreen} />
          <Button text="Go to users screen" onPress={goToUsersScreen} />
        </Stack>
      </Screen>
    </SafeAreaView>
  );
}

export default HomeScreen;
