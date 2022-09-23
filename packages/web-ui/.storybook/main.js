module.exports = {
  stories: ['../components/**/__stories__/*.stories.@(mdx|tsx)'],
  addons: [
    /*
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    // TODO: Deprecated: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addon-contexts
    '@storybook/addon-contexts',
    */
  ],
  framework: '@storybook/react',
  // TODO: Do we need this? From Next.js example app
  /*
  core: {
    builder: '@storybook/builder-webpack5',
  },
  */
};
