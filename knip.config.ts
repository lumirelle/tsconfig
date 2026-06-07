import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{js,ts}'],
  ignoreDependencies: ['@lumirelle/oxlint-config'],
} satisfies KnipConfig
