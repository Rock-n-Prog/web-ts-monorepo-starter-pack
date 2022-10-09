const baseConfig = require("web-ui/tailwind.config");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    './pages/**/*.{js,jsx,ts,tsx}',
  ]
};