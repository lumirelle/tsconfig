import { join } from 'node:path'

export function root(path: string): string {
  return join(import.meta.dirname, '..', path)
}
