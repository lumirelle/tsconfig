import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { root } from '../utils'

const base = readFileSync(root('internal/tsconfig.base.json'), 'utf-8')

describe('base tsconfig', () => {
  it('should match snapshot', () => {
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
})
