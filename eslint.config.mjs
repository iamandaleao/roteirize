// @ts-check
import antfu from '@antfu/eslint-config'
// @ts-expect-error
import pluginTailwindcss from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  await antfu({
    lessOpinionated: true,
    plugins: {
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'vue/no-useless-v-bind': 'off',
      'no-alert': 'off',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
    },
  }),
).prepend(
  {
    ignores: [
      'public/*',
    ],
  },
)
