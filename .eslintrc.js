module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  plugins: [
    'react'
  ],
  extends: [
    'pureprofile',
    'plugin:react/recommended'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'dot-notation': 0, // conflicts with ts
    'no-const-assign': 0, // conflicts with ts
    'no-extra-parens': 0, // conflicts with ts
    'no-undef': 0, // conflicts with ts
    'no-undefined': 0, // conflicts with ts
    'no-unused-expressions': 0, // conflicts with ts
    'no-unused-vars': 0, // conflicts with ts
    'no-use-before-define': 0, // conflicts with ts
    'require-await': 0, // conflicts with ts
    'sort-imports': 0, // this is too annoying
    'space-infix-ops': 0, // conflicts with ts
    'react/prop-types': 0, // set to disable for now
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
    }],
  }
};
