module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ["react", '@typescript-eslint', 'prettier', "@tanstack/query"],
  extends: ['prettier', 'plugin:prettier/recommended', "plugin:@tanstack/eslint-plugin-query/recommended"],
  parserOptions: {
    ignorePatterns: ['.eslintrc.js']
  },
  rules: {
    'semi': "error",
    "no-unused-vars": "off",
    '@typescript-eslint/semi': ["error", "always"],
    '@typescript-eslint/no-unused-vars': ['error'],
    "@tanstack/query/exhaustive-deps": ["error"],
    "@tanstack/query/prefer-query-object-syntax": ["error"]
  },
};