module.exports = {
  root: true,
  extends: ["custom/base.js"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
};
