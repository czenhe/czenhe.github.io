module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    '@vue/prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/no-v-model-argument': 0,
  },
};
