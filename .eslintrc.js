module.exports = {
  parser: 'babel-eslint',
  root: true,
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
  },
};
