module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'selector-id-pattern': null,
    'selector-class-pattern': null,
  },
};
