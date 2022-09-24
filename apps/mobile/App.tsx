import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import { RootNavigator } from "./router/components/RootNavigator";

function App() {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <RootNavigator />
    </SafeAreaProvider>
  ) : null;
}

export default App;
