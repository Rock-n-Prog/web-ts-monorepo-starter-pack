import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootRoutes from "../RootRoutes";
import HomeScreen from "../../screens/home/HomeScreen";
import HelloScreen from "../../screens/hello/HelloScreen";

type RootStackParams = {
  [RootRoutes.Home]: undefined;
  [RootRoutes.Hello]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={RootRoutes.Home} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RootRoutes.Home} component={HomeScreen} />
      <Stack.Screen name={RootRoutes.Hello} component={HelloScreen} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;