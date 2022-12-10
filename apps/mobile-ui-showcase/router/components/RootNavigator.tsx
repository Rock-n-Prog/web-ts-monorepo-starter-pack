import * as React from 'react';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useThemeContext } from '@acme/mobile-ui/hooks/useThemeContext';
import RootRoutes from '../RootRoutes';
import RootDrawerNavigator from './RootDrawerNavigator';

const screens: Record<RootRoutes, string> = {
  Feedback: 'feedback',
  Inputs: 'inputs',
  Layouts: 'layouts',
  Typography: 'typography',
};

const linking = {
  prefixes: ['acme-ui-showcase.app://'],
  config: {
    screens,
  },
};

function RootNavigator() {
  const { mode } = useThemeContext();

  const theme = React.useMemo(() => (mode === 'dark' ? DarkTheme : DefaultTheme), [mode]);

  return (
    <NavigationContainer linking={linking} theme={theme}>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
