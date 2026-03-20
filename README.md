# Lumirelle's TypeScript Config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

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

### [`@lumirelle/tsconfig/lib`](tsconfig.lib.json)

For _TypeScript_ libraries.

For monorepo with TypeScript project references, please refer to [lumirelle/starter-monorepo](https://github.com/lumirelle/starter-monorepo/tree/main/tsconfig.json).

### [`@lumirelle/tsconfig/vue`](tsconfig.vue.json)

For _Vue_ applications.

## Usage

1. Install the package:

   ```bash
   # @antfu/ni
   ni -D @lumirelle/tsconfig
   # Bun
   bun add -D @lumirelle/tsconfig
   # npm
   npm install -D @lumirelle/tsconfig
   # ...
   ```

2. Extend the config in your `tsconfig.json`:

   For library projects:

   ```json
   {
     "extends": "@lumirelle/tsconfig/lib",
     "compilerOptions": {
       // Only include types you need, if you are using Node.js, please replace "bun" with "node".
       "types": ["bun"],
       // Enable isolated declarations to speed up type checking & generation
       "declaration": true,
       "isolatedDeclarations": true
     },
     // Only include your project's source files and their tests, not the config files, e.g. `vite.config.ts`.
     "include": ["src/**/*", "test/**/*"],
     "exclude": ["test/fixture/**/*"]
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
     // Only include your project's source files and their tests, not the config files, e.g. `vite.config.ts`.
     "include": ["src/**/*", "test/**/*"],
     "exclude": ["test/fixture/**/*"]
   }
   ```

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
