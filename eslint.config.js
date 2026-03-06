// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  require('eslint-config-prettier'),
  require('eslint-plugin-prettier/recommended'),
  {
    plugins: {
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
      'unused-imports': require('eslint-plugin-unused-imports'),
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^\\u0000',
              // Packages. `react` related packages come first.
              '^react$',
              '^react-native$',
              '^expo',
              // Other packages (expo, etc)
              '^@?\\w',
              // Internal packages.
              '^(@|components)(/.*|$)',
              // Parent imports. Put `..` last.
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              // Other relative imports. Put same-folder imports and `.` last.
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
              // Style imports.
              '^.+\\.?(css)$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
