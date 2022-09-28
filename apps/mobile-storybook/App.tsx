import * as React from 'react';
import { ThemeProvider } from 'mobile-ui/contexts/ThemeProvider';
import Storybook from './.storybook';

// TODO: Same SafeAreaView as mobile app? (storybook can't be used properly)
function App() {
  return (
    <ThemeProvider>
      <Storybook />
    </ThemeProvider>
  );
}

export default App;
