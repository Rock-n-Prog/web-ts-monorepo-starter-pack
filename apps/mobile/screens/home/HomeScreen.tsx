import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenTitle, SubTitle } from "mobile-ui/components/typography";
import { Button } from "mobile-ui/components/inputs";
import { useThemeContext } from "mobile-ui/hooks/useThemeContext";
import { Screen } from "mobile-ui/components/layouts";
import useRootStackNavigation from '../../router/hooks/useRootStackNavigation';

function HomeScreen() {
  const { goToHelloScreen } = useRootStackNavigation();
  const { switchMode } = useThemeContext();

  // TODO: Android -> bottom bar color
  // TODO: SafeAreaView in Screen? + SafeAreaProvider in ThemeProvider? Test with storybook first to see if it causes issues.
  return (
    <Screen>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenTitle>Home!</ScreenTitle>
        <SubTitle>Page to test navigation and theme</SubTitle>
        <Button title="Go to hello screen" onPress={goToHelloScreen} />
        <Button title="Switch mode" onPress={switchMode} />
      </SafeAreaView>
    </Screen>
  );
}

export default HomeScreen;
