module.exports = {
  plugins: ["react"],
  extends: [
    './base.js',
    'plugin:react/recommended'
  ],
  rules: {
    "react/jsx-key": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
