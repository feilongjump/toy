module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'global-require': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
