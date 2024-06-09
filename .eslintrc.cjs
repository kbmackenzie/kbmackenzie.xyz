module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@stylistic/js',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/js/quotes': ['error', 'single'],
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'ExportDefaultDeclaration',
        'message': 'Prefer named exports.'
      },
    ]
  },
}
