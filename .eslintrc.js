module.exports = {
  env: {
    browser: true,
    es2021: true,
    'shared-node-browser': true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:import/typescript',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'max-classes-per-file': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-continue': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'import/no-commonjs': 'error',
        'tsdoc/syntax': 'warn',
      },
    },
  ],
  ignorePatterns: ['dist/', 'node_modules/', 'docs/'],
  settings: {
    'import/resolver': {
      typescript: {
        extensionAlias: {
          '.js': ['.ts', '.d.ts', '.js'],
        },
      },
    },
  },
};
