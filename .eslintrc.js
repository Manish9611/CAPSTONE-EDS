module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
    'linebreak-style': 'off',
    'no-trailing-spaces': 'off',
    'no-inner-declarations': 'off',
    'prefer-template': 'off',
    'no-console': 'off',
    'no-dupe-keys': 'off',
    'no-shadow': 'off',
    'space-infix-ops': 'off',
    'eqeqeq': 'off',
    'no-multiple-empty-lines': 'off',
    'eol-last': 'off',
    'no-plusplus': 'off',
    'quote-props': 'off',
    'no-undef': 'off',
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
  },
};
