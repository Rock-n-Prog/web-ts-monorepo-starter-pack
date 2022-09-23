// TODO: Dark mode? https://storybook.js.org/addons/storybook-dark-mode
module.exports = {
  stories: ['../components/**/__stories__/*.stories.@(mdx|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
};
