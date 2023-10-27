module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'plugin:storybook/recommended'],
  overrides: [
    {
      extends: ['standard-with-typescript'],
      files: ['./src/**/*.{ts|tsx}'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
  },
};
