import * as React from 'react';
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HelloScreen() {
  // TODO: Plug to trpc
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hello!</Text>
    </SafeAreaView>
  );
}

export default HelloScreen;