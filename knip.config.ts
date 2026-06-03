import type { KnipConfig } from 'knip'

export default {
  entry: ['test/**/*.{js,ts}'],
  ignoreBinaries: ['mise'],
  ignoreDependencies: ['@arethetypeswrong/cli', '@lumirelle/oxlint-config', 'publint', 'bumpp'],
} satisfies KnipConfig
