// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  await antfu({
    lessOpinionated: true,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'vue/no-useless-v-bind': 'off',
      'no-alert': 'off',
    },
  }),
).prepend(
  {
    ignores: [
      'public/*',
    ],
  },
)
