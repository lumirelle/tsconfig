import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

function dir(path: string): string {
  return join(import.meta.dirname, path)
}
const base = readFileSync(dir('../../internal/tsconfig.base.json'), 'utf-8')
const ts = readFileSync(dir('../../tsconfig.ts.json'), 'utf-8')
const vue = readFileSync(dir('../../tsconfig.vue.json'), 'utf-8')

describe('tsconfig', () => {
  it('base tsconfig', () => {
    expect(base).toMatchInlineSnapshot(`
      "{
        "compilerOptions": {
          // Language and Environment
          "target": "ESNext",
          "lib": ["ESNext"],
          "moduleDetection": "force",

          // Modules
          "module": "preserve",
          "resolveJsonModule": true,
          "allowArbitraryExtensions": true,
          "allowImportingTsExtensions": true,

          // Type Checking
          "noImplicitOverride": true,
          "noUncheckedIndexedAccess": true,

          // Emit
          "noEmit": true,

          // Interop Constraints
          "verbatimModuleSyntax": true,

          // Completeness
          "skipLibCheck": true
        }
      }
      "
    `)
  })

  it('ts tsconfig', () => {
    expect(ts).toMatchInlineSnapshot(`
      "{
        "extends": "./internal/tsconfig.base.json",
        "compilerOptions": {
        }
      }
      "
    `)
  })

  it('vue tsconfig', () => {
    expect(vue).toMatchInlineSnapshot(`
      "{
        "extends": "./internal/tsconfig.base.json",
        "compilerOptions": {
          "jsx": "preserve",
          "jsxImportSource": "vue",
          "lib": [
            // Target ES2022 to align with Vite.
            // <https://vite.dev/config/build-options.html#build-target>
            // Support for newer versions of language built-ins are
            // left for the users to include, because that would require:
            //   - either the project doesn't need to support older versions of browsers;
            //   - or the project has properly included the necessary polyfills.
            "ES2022",
            "DOM"
          ]
        }
      }
      "
    `)
  })
})
