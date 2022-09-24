import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RootStackNavigator from "./RootStackNavigator";
import RootRoutes from "../RootRoutes";

const screens: Record<RootRoutes, string> = {
  Home: "",
  Hello: "hello"
};

const linking = {
  prefixes: ["treeview.dev://"],
  config: {
    screens,
  }
};

export const RootNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};