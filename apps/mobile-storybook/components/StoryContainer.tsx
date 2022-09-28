import * as React from 'react';
import { Screen } from 'mobile-ui/components/layouts';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import { View } from 'react-native';
import { ThemeSwitcher } from './ThemeSwitcher';

function StoryContainer({ children }: React.PropsWithChildren) {
  const { theme } = useThemeContext();

  return (
    <Screen fullHeight style={{ backgroundColor: theme.colors.background }}>
      <View style={{ flexGrow: 1, flex: 1, justifyContent: 'center' }}>{children}</View>

      <ThemeSwitcher />
    </Screen>
  );
}

export { StoryContainer };
