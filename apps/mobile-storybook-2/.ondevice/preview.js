import { View } from 'react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { ThemeProvider } from '@acme/mobile-ui/contexts/ThemeProvider';
import { Screen } from '@acme/mobile-ui/components/layouts';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

// TODO: Rework preview
const withCustomProviders = Story => (
  <ThemeProvider>
    <Screen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </View>

      <ThemeSwitcher />
    </Screen>
  </ThemeProvider>
);

export const decorators = [withCustomProviders, withBackgrounds];

export const parameters = {
  backgrounds: [
    { name: 'dark', value: 'black', default: true },
    { name: 'light', value: 'white' },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
