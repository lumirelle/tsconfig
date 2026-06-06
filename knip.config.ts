import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{js,ts}'],
  ignoreBinaries: ['mise'],
  ignoreDependencies: ['@lumirelle/oxlint-config', 'nano-staged'],
} satisfies KnipConfig
