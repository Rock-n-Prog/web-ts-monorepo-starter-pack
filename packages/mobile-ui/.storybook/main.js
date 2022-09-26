// TODO: addons: ['@storybook/addon-essentials', 'storybook-dark-mode'],
// TODO: preview.js like web-ui
// TODO: Add layouts stories
// TODO: Add typography stories
// TODO: See if SafeAreaView can be used on the Screen component + if SafeAreaProvider can be put in ThemeProvider. This was omitted from feat: add and use mobile-ui package #50 out of fear it would break storybook.
// TODO: Enhance style of disabled buttons for mobile-ui (easier with storybook)
module.exports = {
  stories: ['../components/**/__stories__/*.stories.@(mdx|tsx)'],
  addons: [],
  framework: '@storybook/react',
};