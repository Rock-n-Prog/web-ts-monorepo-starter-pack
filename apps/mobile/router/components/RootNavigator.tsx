import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
  // TODO: Stack navigator flashes with dark theme. Maybe we should send it a theme?
  return (
    <NavigationContainer linking={linking}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
