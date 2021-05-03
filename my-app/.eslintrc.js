module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "plugin:cypress/recommended",
    "plugin:ramda/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["cypress", "prefer-arrow", "ramda", "react-hooks", "prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    "cypress/globals": true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    jsx: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    curly: ["error"],
    "import/no-cycle": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-default": 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "prettier/prettier": ["error", { quoteProps: "preserve" }],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-boolean-value": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/style-prop-object": 0,
    "react/require-default-props": 0,
    "jsx-a11y/label-has-associated-control": [
      "error",
      { controlComponents: ["Switch", "Input"] },
    ],
    "ramda/prefer-ramda-boolean": 0,
    "react/jsx-no-undef": [0, { allowGlobals: true }],
    "import/no-named-as-default": 0,
  },
  globals: {
    // Storybook
    Story: "readonly",
    Description: "readonly",
    Example: "readonly",
    JSX: true,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
