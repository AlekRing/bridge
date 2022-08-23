const eslintConfig = {
  root: true,
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
  ],
  parser: '@babel/eslint-parser',
  rules: {
    properties: 1,
  },
  settings: {
    'import/resolver': {
      alias: true,
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
  },
};

module.exports = eslintConfig;
