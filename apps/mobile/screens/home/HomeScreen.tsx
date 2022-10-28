import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenTitle, SubTitle } from 'mobile-ui/components/typography';
import { Button } from 'mobile-ui/components/inputs';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import { Screen } from 'mobile-ui/components/layouts';
import useRootStackNavigation from '../../router/hooks/useRootStackNavigation';

function HomeScreen() {
  const { goToHelloScreen, goToUsersScreen } = useRootStackNavigation();
  const { switchMode } = useThemeContext();

  return (
    <SafeAreaView>
      <Screen>
        <ScreenTitle>Home!</ScreenTitle>
        <SubTitle>Page to test navigation and theme</SubTitle>
        <Button text="Go to hello screen" onPress={goToHelloScreen} />
        <Button text="Go to users screen" onPress={goToUsersScreen} />
        <Button text="Switch mode" onPress={switchMode} />
      </Screen>
    </SafeAreaView>
  );
}

export default HomeScreen;
