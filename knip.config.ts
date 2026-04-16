import type { KnipConfig } from 'knip'

export default {
  /// keep-sorted
  ignoreDependencies: ['@arethetypeswrong/cli', '@lumirelle/oxlint-config', 'publint', 'vue'],
  /// keep-sorted
  ignoreFiles: ['test/fixtures/**'],
} satisfies KnipConfig
