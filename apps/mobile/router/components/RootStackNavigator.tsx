import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';
import HelloScreen from '../../screens/hello/HelloScreen';
import UsersScreen from '../../screens/users/UsersScreen';
import RootRoutes from '../RootRoutes';
import BackButton from './BackButton';
import Toolbar from './Toolbar';

type RootStackParams = {
  readonly [RootRoutes.Home]: undefined;
  readonly [RootRoutes.Hello]: undefined;
  readonly [RootRoutes.Users]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

// TODO: Weird space between page and header? Maybe just change page bg color
function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={RootRoutes.Home}
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
        headerLeft: BackButton,
        headerRight: Toolbar,
        animation: 'fade_from_bottom',
      }}
    >
      <Stack.Screen name={RootRoutes.Home} component={HomeScreen} options={{ headerShown: true }} />
      <Stack.Screen name={RootRoutes.Hello} component={HelloScreen} options={{ headerShown: true }} />
      <Stack.Screen name={RootRoutes.Users} component={UsersScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
