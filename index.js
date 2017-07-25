module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  env: {
    'jest/globals': true
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'jest', 'prettier'],
  rules: {
    'flowtype/no-weak-types': 1,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      0,
      'always',
      {
        annotateUndefined: 'never'
      }
    ],
    'flowtype/require-valid-file-annotation': 2,
    'import/extensions': 0,
    'import/no-duplicates': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'new-cap': 0,
    'no-class-assign': 0,
    'no-duplicate-imports': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'prettier/prettier': ['error', 'fb'],
    'react/forbid-prop-types': 1,
    'react/jsx-filename-extension': [0, {extensions: ['.js', '.jsx']}],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0
  }
};