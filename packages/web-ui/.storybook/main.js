module.exports = {
  stories: ['../src/**/__stories__/*.stories.@(mdx|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-contexts',
  ],
  framework: '@storybook/react',
  // TODO: Do we need this? From Next.js example app
  /*
  core: {
    builder: '@storybook/builder-webpack5',
  },
  */
};
