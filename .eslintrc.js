process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',
  rules: {
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  },
}
