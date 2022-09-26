import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'mobile-ui/contexts/ThemeProvider';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './router/components/RootNavigator';
import TrpcProvider from './contexts/TrpcProvider';

function App() {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <TrpcProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <RootNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </TrpcProvider>
  ) : null;
}

export default App;
