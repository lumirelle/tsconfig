import type { KnipConfig } from 'knip'
import { name as thisPkg } from './package.json'

export default {
  /// keep-sorted
  ignoreDependencies: ['@arethetypeswrong/cli', '@lumirelle/oxlint-config', 'publint', 'vue', thisPkg],
  /// keep-sorted
  ignoreFiles: ['test/fixture/**'],
} satisfies KnipConfig
