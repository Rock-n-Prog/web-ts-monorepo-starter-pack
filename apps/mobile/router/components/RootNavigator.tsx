import * as React from 'react';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import RootRoutes from '../RootRoutes';
import RootStackNavigator from './RootStackNavigator';

const screens: Record<RootRoutes, string> = {
  Home: '',
  Hello: 'hello',
};

const linking = {
  prefixes: ['treeview.dev://'],
  config: {
    screens,
  },
};

function RootNavigator() {
  const { mode } = useThemeContext();

  const theme = React.useMemo(() => (mode === 'dark' ? DarkTheme : DefaultTheme), [mode]);

  return (
    <NavigationContainer linking={linking} theme={theme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
