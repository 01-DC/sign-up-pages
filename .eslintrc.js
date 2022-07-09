module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    '@next/next/no-document-import-in-page': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@next/next/no-img-element': 'off',
    'no-lone-blocks': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
};
