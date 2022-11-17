import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useThemeContext } from '@acme/mobile-ui/hooks/useThemeContext';
import HomeScreen from '../../screens/home/HomeScreen';
import HelloScreen from '../../screens/hello/HelloScreen';
import UsersScreen from '../../screens/users/UsersScreen';
import AddUserScreen from '../../screens/users/AddUserScreen';
import RootRoutes from '../RootRoutes';
import BackButton from './BackButton';
import DevTools from './DevTools';

type RootStackParams = {
  readonly [RootRoutes.Home]: undefined;
  readonly [RootRoutes.Hello]: undefined;
  readonly [RootRoutes.Users]: undefined;
  readonly [RootRoutes.AddUser]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function RootStackNavigator() {
  const { theme } = useThemeContext();

  return (
    <Stack.Navigator
      initialRouteName={RootRoutes.Home}
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
        headerLeft: BackButton,
        headerRight: DevTools,
        animation: 'fade_from_bottom',
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}
    >
      <Stack.Screen name={RootRoutes.Home} component={HomeScreen} options={{ headerShown: true }} />
      <Stack.Screen name={RootRoutes.Hello} component={HelloScreen} options={{ headerShown: true }} />
      <Stack.Screen name={RootRoutes.Users} component={UsersScreen} options={{ headerShown: true }} />
      <Stack.Screen name={RootRoutes.AddUser} component={AddUserScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
