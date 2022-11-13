import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() =>
        Font.loadAsync({
          // Not used, placed here as an example
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        }),
      )
      .catch(error => console.error(error))
      .finally(() => {
        setLoadingComplete(true);
        return SplashScreen.hideAsync();
      });
  }, []);

  return isLoadingComplete;
}

export default useCachedResources;
