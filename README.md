# Lumirelle's TypeScript Config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [!Caution]
>
> Since `0.1.0`, this package only supports _TypeScript_ 6.0 and above, if you are using older versions of _TypeScript_, please use `0.0.x` versions.

Lumirelle's opinionated _TypeScript_ config.

## Motivation

The `tsconfig.json` is the configuration file for _TypeScript_ compilers (`tsc`, `tsgo`, `tsdown`, `bunup`, ... All of the compilers / build tools who respect the `tsconfig.json` file). It's used to tell the compiler **what files should be included, and how they should be processed**.

In modern _TypeScript_ projects, we often use `tsconfig.json` files to:

1. IDE LSP (Language Server Protocol) support, powered by IDE plugin with `tsserver` (_TypeScript_ language server);
2. Compiler configuration, for example, this project uses `bunup` as the compiler / build tool, who respects the `tsconfig.json` file, and will change its behavior based on the config;
3. Type aware linting, for example, some _ESLint_ or _OxLint_ rules require type information, how the generator of type information is configured is also based on the `tsconfig.json` file;
4. Type aware checking, for example, for library projects, we may use `tsc --noEmit` to check the type correctness; for _Vue_ application projects, we may use `vue-tsc --noEmit` to do this.

In order to get better DX and UX, we need to have a good `tsconfig.json` config, use better types to build libaries / applications with better quality.

## Configuration

### [`@lumirelle/tsconfig/ts`](tsconfig.ts.json)

For _JavaScript / TypeScript_ files.

### [`@lumirelle/tsconfig/vue`](tsconfig.vue.json)

For _Vue_ files.

Specially, this config [limits the language level to **ES2022**](https://github.com/vuejs/tsconfig/blob/main/tsconfig.dom.json#L11).

## Usage

1. Install the package (and referenced types you need):

   ```bash
   # @antfu/ni
   ni -D @lumirelle/tsconfig
   # Bun
   bun add -D @lumirelle/tsconfig
   # npm
   npm install -D @lumirelle/tsconfig
   # ...

   # Referenced types, for example, if you are using Bun:
   ni -D bun-types @types/node
   # Or Node.js:
   ni -D @types/node
   # Or else...
   ```

2. Extend the config in your `tsconfig.json`:

   For library projects:

   ```json
   {
     "extends": "@lumirelle/tsconfig/lib",
     "compilerOptions": {
       // Only include types you need, if you are using Node.js, please replace "bun-types" with "node".
       "types": ["bun-types"],
       // Enable isolated declarations to speed up type checking & generation
       "declaration": true,
       "isolatedDeclarations": true
     },
     // Only include your project's source files and their tests, not the config files, e.g. `vite.config.ts`.
     "include": ["src/**/*", "test/**/*"],
     "exclude": ["test/fixtures/**/*"]
   }
   ```

   For Vue application projects:

   ```json
   {
     "extends": "@lumirelle/tsconfig/vue",
     "compilerOptions": {
       // Please adjust the path aliases to match your bundler's configuration.
       "paths": {
         "~": ["./"],
         "~/*": ["./*"]
       },
       // Only include types you need, if you are using Vite, you can leave below as is, otherwise, please replace "vite/client" with the types you need.
       "types": ["vite/client"]
     },
     // Only include your project's source files and their tests, not the config files, e.g. `knip.config.ts`.
     // `vite.config.ts` is required for provide vite client types, you can remove it if you are not using Vite.
     "include": ["*.d.ts", "vite.config.ts", "src/**/*"]
   }
   ```

## Examples

You can find example projects using this config in the [examples](./examples) directory.

Or see the real-world usage:

- TypeScript library project: [lumirelle/starter-ts](https://github.com/lumirelle/starter-ts)
- TypeScript monorepo library project: [lumirelle/starship-butler](https://github.com/lumirelle/starship-butler) & [lumirelle/starter-monorepo](https://github.com/lumirelle/starter-monorepo)
- Vue application project: [lumirelle/lumirelle.me](https://github.com/lumirelle/lumirelle.me)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg' alt='Sponsors'/>
  </a>
</p>

## License

[MIT](./LICENSE.md) License © [Lumirelle](https://github.com/Lumirelle)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@lumirelle/tsconfig?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/@lumirelle/tsconfig
[npm-downloads-src]: https://img.shields.io/npm/dm/@lumirelle/tsconfig?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/@lumirelle/tsconfig
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@lumirelle/tsconfig?style=flat&colorA=18181B&colorB=F0DB4F&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@lumirelle/tsconfig
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/@lumirelle/tsconfig
[codecov-src]: https://img.shields.io/codecov/c/gh/lumirelle/tsconfig/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/lumirelle/tsconfig
[license-src]: https://img.shields.io/github/license/lumirelle/tsconfig.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/lumirelle/tsconfig/blob/main/LICENSE.md
