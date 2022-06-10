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
    'selector-class-pattern': '^[A-Z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
  },
};
