import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([{
  plugins: {
    js,
  },
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.commonjs,
      ...globals.node,
      ...globals.jest,
    },

    ecmaVersion: 'latest',
  },

  rules: {
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    semi: 'off'
  },
}]);
