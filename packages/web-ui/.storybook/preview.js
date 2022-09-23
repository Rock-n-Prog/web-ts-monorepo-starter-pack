import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { getTheme } from '../styles/theme';

const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
  },
};

function withGlobalStyle(Story) {
  return (
    <>
      <GlobalStyle />
      <Story />
    </>
  );
}

function withThemeProvider(Story, context) {
  const theme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
}

const decorators = [withGlobalStyle, withThemeProvider];

export { globalTypes, parameters, decorators };
