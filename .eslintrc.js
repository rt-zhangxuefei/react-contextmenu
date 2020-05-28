module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    // your rules
    '@typescript-eslint/camelcase': 1,
    'react/no-array-index-key': 1,
    'no-param-reassign': 0,
    'global-require': 0,
    'no-console': 0,
  },
};
