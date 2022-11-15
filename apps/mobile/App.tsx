import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'mobile-ui/contexts/ThemeProvider';
import { SnackbarProvider } from 'mobile-ui/contexts/SnackbarProvider';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './router/components/RootNavigator';
import TrpcProvider from './contexts/TrpcProvider';
import { TranslationProvider } from './contexts/TranslationProvider';
import './i18n';

function App() {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <TrpcProvider>
      <TranslationProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <SnackbarProvider>
              <StatusBar style="auto" />
              <RootNavigator />
            </SnackbarProvider>
          </SafeAreaProvider>
        </ThemeProvider>
      </TranslationProvider>
    </TrpcProvider>
  ) : null;
}

export default App;
