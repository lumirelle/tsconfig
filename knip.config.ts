import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{js,ts}'],
  ignoreFiles: ['taze.config.ts'],
  ignoreDependencies: ['@lumirelle/oxlint-config', 'taze'],
} satisfies KnipConfig
