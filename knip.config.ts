import type { KnipConfig } from 'knip'

export default {
  ignoreDependencies: ['@arethetypeswrong/cli', '@lumirelle/oxlint-config', 'publint', 'vue'],
  ignoreFiles: ['test/fixtures/**'],
} satisfies KnipConfig
