module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["jest"],
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
};
