import * as React from 'react';
import { Text, TouchableOpacity } from "react-native";
import useRootStackNavigation from "../../router/hooks/useRootStackNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const {goToHelloScreen} = useRootStackNavigation();

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home!</Text>
      <TouchableOpacity onPress={goToHelloScreen}>
        <Text>Go to hello screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;