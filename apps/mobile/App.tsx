import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './router/components/RootNavigator';
import TrpcProvider from './contexts/TrpcProvider';

function App() {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <TrpcProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <RootNavigator />
      </SafeAreaProvider>
    </TrpcProvider>
  ) : null;
}

export default App;
