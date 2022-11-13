import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'mobile-ui/contexts/ThemeProvider';
import useCachedResources from './hooks/useCachedResources';
import RootNavigator from './router/components/RootNavigator';
import TrpcProvider from './contexts/TrpcProvider';
import { TranslationProvider } from './contexts/TranslationProvider';
import './i18n';

function App() {
  const isLoadingComplete = useCachedResources();

  // TODO: SafeAreaProvider isn't used in screens anymore. Do we actually need it?
  return isLoadingComplete ? (
    <TrpcProvider>
      <TranslationProvider>
        <ThemeProvider>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <RootNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </TranslationProvider>
    </TrpcProvider>
  ) : null;
}

export default App;
