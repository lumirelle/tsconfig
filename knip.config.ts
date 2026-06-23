import type { KnipConfig } from 'knip'

export default {
  ignoreFiles: [
    // Test fixtures
    'test/fixtures/**',

    // TODO(Lumirelle): Create a pull request to add taze plugin for knip.
    'taze.config.ts',
  ],
  ignoreDependencies: [
    // Check tools
    '@lumirelle/oxlint-config',
    '@arethetypeswrong/cli',
    'publint',
    'vue-tsc',

    // Test fixtures prerequisites
    'vue',

    // Dependencies manager
    'taze',

    // Releasing tools
    'bumpp',
    'changelogithub',
    'pkg-pr-new',
  ],
} satisfies KnipConfig
