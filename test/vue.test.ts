import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { root } from './utils'

const vue = readFileSync(root('tsconfig.vue.json'), 'utf-8')

describe('vue tsconfig', () => {
  it('should match snapshot', () => {
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
