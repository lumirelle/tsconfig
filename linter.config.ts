import type { Options } from '@lumirelle/linter-config'

/**
 * Linter options for both ESLint & Oxlint.
 */
export const options = {
  type: 'lib',
  typescript: { tsconfigPath: 'tsconfig.json' },
  oxlint: { typeAware: true },
  ignores: ['test/fixtures/**', '.agents/**', '.claude/**'],
} satisfies Options
