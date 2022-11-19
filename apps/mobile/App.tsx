import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@acme/mobile-ui/contexts/ThemeProvider';
import { SnackbarProvider } from '@acme/mobile-ui/contexts/SnackbarProvider';
import { LocaleProvider } from '@acme/mobile-locales/contexts/LocaleProvider';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './router/components/RootNavigator';
import TrpcProvider from './contexts/TrpcProvider';
import './i18n';

function App() {
  const isLoadingComplete = useCachedResources();

  return isLoadingComplete ? (
    <TrpcProvider>
      <LocaleProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <SnackbarProvider>
              <StatusBar style="auto" />
              <RootNavigator />
            </SnackbarProvider>
          </SafeAreaProvider>
        </ThemeProvider>
      </LocaleProvider>
    </TrpcProvider>
  ) : null;
}

export default App;
