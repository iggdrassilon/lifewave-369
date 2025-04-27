import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
// import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // prettier.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'max-len': [
        'error',
        {
          code: 120,
          ignorePattern: 'className',
        },
      ],
      // "prettier/prettier": ["error", { "printWidth": 80 }],
    },
  },
]
