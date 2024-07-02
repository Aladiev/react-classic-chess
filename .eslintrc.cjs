module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:unicorn/all",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "react", "@typescript-eslint", "autofix", "import"],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "detect"
    }
  },  
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": ["error", { "component": true, "html": true }],
    "react/react-in-jsx-scope": "off",
    "autofix/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "@/**/**",
            "group": "parent",
            "position": "before"
          }
        ],
        "alphabetize": { "order": "asc" }
      }
    ],
    "semi": "error",
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": "off",
  },
}
