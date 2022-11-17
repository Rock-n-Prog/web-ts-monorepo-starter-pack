import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from '@acme/mobile-ui/contexts/ThemeProvider';
import Storybook from './.storybook';

function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <Storybook />
      </View>
    </ThemeProvider>
  );
}

export default App;
