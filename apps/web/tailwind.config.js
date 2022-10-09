const baseConfig = require("theme/tailwind.config");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './pages/**/*.{js,jsx,ts,tsx}',
  ]
};