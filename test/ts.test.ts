import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { root } from './utils'

const ts = readFileSync(root('tsconfig.ts.json'), 'utf-8')

describe('ts tsconfig', () => {
  it('should match snapshot', () => {
    expect(ts).toMatchInlineSnapshot(`
      "{
        "extends": "./internal/tsconfig.base.json",
        "compilerOptions": {
        }
      }
      "
    `)
  })
})
