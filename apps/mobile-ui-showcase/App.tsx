import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@acme/mobile-ui/contexts/ThemeProvider';
import { SnackbarProvider } from '@acme/mobile-ui/contexts/SnackbarProvider';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './router/components/RootNavigator';
import './i18n';

function App() {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <ThemeProvider>
      <SafeAreaProvider>
        <SnackbarProvider>
          <StatusBar style="auto" />
          <RootNavigator />
        </SnackbarProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  ) : null;
}

export default App;
