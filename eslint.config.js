import eslint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      '@stylistic/js': stylisticJs,
      'react': react,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tsParser
    },
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
);
