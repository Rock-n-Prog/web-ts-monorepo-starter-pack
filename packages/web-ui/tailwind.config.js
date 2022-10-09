const baseConfig = require("theme/tailwind.config");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './components/**/*.{js,jsx,ts,tsx}',
  ]
};