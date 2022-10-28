import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootRoutes from '../RootRoutes';
import HomeScreen from '../../screens/home/HomeScreen';
import HelloScreen from '../../screens/hello/HelloScreen';
import UsersScreen from '../../screens/users/UsersScreen';

type RootStackParams = {
  readonly [RootRoutes.Home]: undefined;
  readonly [RootRoutes.Hello]: undefined;
  readonly [RootRoutes.Users]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={RootRoutes.Home}
      screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
    >
      <Stack.Screen name={RootRoutes.Home} component={HomeScreen} />
      <Stack.Screen name={RootRoutes.Hello} component={HelloScreen} />
      <Stack.Screen name={RootRoutes.Users} component={UsersScreen} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
