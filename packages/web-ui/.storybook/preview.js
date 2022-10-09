import React from 'react';
import '../styles/globals.css';

const globalTypes = {
  colorScheme: {
    name: 'Color Scheme',
    description: 'Global color scheme for components',
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

function withThemeProvider(Story, context) {
  return (
    <div className={context.colorScheme}>
      <Story />
    </div>
  );
}

const decorators = [withThemeProvider];

export { globalTypes, parameters, decorators };
