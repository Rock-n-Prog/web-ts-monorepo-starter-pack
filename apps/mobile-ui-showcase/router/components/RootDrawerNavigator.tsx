import * as React from 'react';
import { useThemeContext } from '@acme/mobile-ui/hooks/useThemeContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedbackScreen from '../../screens/feedback/FeedbackScreen';
import TypographyScreen from '../../screens/typography/TypographyScreen';
import LayoutsScreen from '../../screens/layouts/LayoutsScreen';
import InputsScreen from '../../screens/inputs/InputsScreen';
import RootRoutes from '../RootRoutes';
import DevTools from './DevTools';

type RootTabParams = {
  readonly [RootRoutes.Feedback]: undefined;
  readonly [RootRoutes.Inputs]: undefined;
  readonly [RootRoutes.Layouts]: undefined;
  readonly [RootRoutes.Typography]: undefined;
};

const Drawer = createDrawerNavigator<RootTabParams>();

function RootDrawerNavigator() {
  const { theme } = useThemeContext();

  return (
    <Drawer.Navigator
      initialRouteName={RootRoutes.Feedback}
      screenOptions={{
        headerShown: true,
        headerRight: DevTools,
        headerTintColor: theme.colors.onSurface,
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        drawerActiveTintColor: theme.colors.onPrimary,
        drawerActiveBackgroundColor: theme.colors.palette.primary.main,
        drawerInactiveTintColor: theme.colors.disabled.onBackground,
        drawerInactiveBackgroundColor: theme.colors.disabled.background,
      }}
    >
      <Drawer.Screen name={RootRoutes.Feedback} component={FeedbackScreen} />
      <Drawer.Screen name={RootRoutes.Inputs} component={InputsScreen} />
      <Drawer.Screen name={RootRoutes.Layouts} component={LayoutsScreen} />
      <Drawer.Screen name={RootRoutes.Typography} component={TypographyScreen} />
    </Drawer.Navigator>
  );
}

export default RootDrawerNavigator;
