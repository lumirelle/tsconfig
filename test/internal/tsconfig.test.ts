import { describe, expect, it } from 'bun:test'
import baseTsConfig from '../../internal/tsconfig.base.json'
import tsTsConfig from '../../tsconfig.ts.json'
import vueTsConfig from '../../tsconfig.vue.json'

describe('tsconfig', () => {
  it('base tsconfig', () => {
    expect(baseTsConfig).toMatchInlineSnapshot(`
      {
        "compilerOptions": {
          "allowImportingTsExtensions": true,
          "lib": [
            "ESNext",
          ],
          "module": "preserve",
          "moduleDetection": "force",
          "noEmit": true,
          "noImplicitOverride": true,
          "noUncheckedIndexedAccess": true,
          "resolveJsonModule": true,
          "skipLibCheck": true,
          "target": "ESNext",
          "verbatimModuleSyntax": true,
        },
      }
    `)
  })

  it('ts tsconfig', () => {
    expect(tsTsConfig).toMatchInlineSnapshot(`
      {
        "compilerOptions": {},
        "extends": "./internal/tsconfig.base.json",
      }
    `)
  })

  it('vue tsconfig', () => {
    expect(vueTsConfig).toMatchInlineSnapshot(`
      {
        "compilerOptions": {
          "jsxImportSource": "vue",
          "lib": [
            "ES2022",
            "DOM",
          ],
        },
        "extends": "./internal/tsconfig.base.json",
      }
    `)
  })
})
