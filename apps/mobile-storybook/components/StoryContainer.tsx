import * as React from 'react';
import { Screen } from '@acme/mobile-ui/components/layouts';
import { View } from 'react-native';
import { ThemeSwitcher } from './ThemeSwitcher';

function StoryContainer({ children }: React.PropsWithChildren) {
  return (
    <Screen>
      <View style={{ flexGrow: 1, flex: 1, justifyContent: 'center' }}>{children}</View>

      <ThemeSwitcher />
    </Screen>
  );
}

export { StoryContainer };
