// TODO: Parser could be set in a new custom/react-library.js
module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["custom/react.js"],
  rules: {
    // TODO: Very weird, we shouldn't have to do that
    'import/no-unresolved': 'off'
  }
};
