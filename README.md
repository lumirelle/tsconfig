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
2. Build tool configuration, for example, this project uses `tsdown` as the build tool, who respects the `tsconfig.json` file, and will change its behavior based on the config;
3. Type aware linting, for example, some _ESLint_ or _OxLint_ rules require type information, how the generator of type information is configured is also based on the `tsconfig.json` file;
4. Type aware checking, for example, for library projects, we may use `tsc --noEmit` to check the type correctness; for _Vue_ application projects, we may use `vue-tsc --noEmit` to do this.

In order to get better DX (development experience) and UX (user experience), we need a good `tsconfig.json` setup, so that we can build libaries / applications with correct types and better quality.

## Configuration

### [`@lumirelle/tsconfig/ts`](tsconfig.ts.json)

For _TypeScript_ projects.

### [`@lumirelle/tsconfig/vue`](tsconfig.vue.json)

For _Vue_ projects.

Specially, this config assumes you are using [Vite](https://vitejs.dev/) to build _Vue_ applications, so it limits the language level to **ES2022**, [to align with the default build target of Vite](https://github.com/vuejs/tsconfig/blob/main/tsconfig.dom.json#L11).

## Usage

1. Install this package (also install the referenced types you may need):

    ```bash
    # nub, https://nubjs.com/
    nub add -D @lumirelle/tsconfig
    # pnpm
    pnpm add -D @lumirelle/tsconfig
    # npm
    npm install -D @lumirelle/tsconfig
    # ...

    # Referenced types
    # For example, if you are building a Node.js package:
    nub add -D @types/node
    # ...Or else
    ```

2. Extend this config in your `tsconfig.json`:

    > [!Note]
    > We highly recommend you to use [TypeScript project references](https://www.typescriptlang.org/tsconfig/#references) to split the TypeScript setup of source files and other project files.

    For library projects:

    _tsconfig.json_

    ```json
    {
      "references": [
        { "path": "./tsconfig.lib.json" },
        { "path": "./tsconfig.node.json" }
      ],
      "files": []
    }
    ```

    _tsconfig.lib.json_

    ```json
    {
      "extends": "@lumirelle/tsconfig/lib",
      "compilerOptions": {
        // To ensure your library's Node.js compatibility, we use Node.js API types in source and test files.
        "types": ["node"],
        // Enable isolated declarations to speed up type checking & generation
        "declaration": true,
        "isolatedDeclarations": true
      },
      // Only include your project's source files who are expected to run with `isolatedDeclarations` and use Node.js API types, also test files who are related to source files.
      "include": ["src/**/*", "test/**/*"],
      "exclude": ["test/fixtures/**/*"]
    }
    ```

    _tsconfig.node.json_

    ```json
    {
      "extends": "@lumirelle/tsconfig/ts",
      "compilerOptions": {
        "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
        // To get the benefits of your runtime, we use runtime-specific API types here.
        "types": ["node"],
        // Allow importing JavaScript files
        "allowJs": true
      },
      // Your project files others than source & test files who are need type support
      "include": ["scripts/**/*", "*.ts", "*.js"]
    }
    ```

    For Vue application projects:

    _tsconfig.json_

    ```json
    {
      "references": [
        { "path": "./tsconfig.app.json" },
        { "path": "./tsconfig.node.json" }
      ],
      "files": []
    }
    ```

    _tsconfig.app.json_

    ```json
    {
      "extends": "@lumirelle/tsconfig/vue",
      "compilerOptions": {
        "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
        // Please adjust the path aliases to match your bundler's configuration.
        "paths": {
          "~": ["./src"],
          "~/*": ["./src/*"]
        },
        // Include types you need.
        // For example, "vite/client" provides extra types to source files for Vite's `import.meta.env` and `import.meta.hot` API, and more.
        // Some Vite plugins may also provide extra types to source files, like `vite-svg-loader`, please also include them.
        // If you are not using Vite, you can change below types as you need.
        "types": ["vite/client"]
      },
      // Only include your project's source files who are expected to run in the browser, also extra types to source files generated by tools (matched by `*.d.ts`), also test files who are related to source files.
      "include": ["src/**/*", "test/**/*", "*.d.ts"],
      "exclude": ["test/fixtures/**/*"]
    }
    ```

    _tsconfig.node.json_

    ```json
    {
      "extends": "@lumirelle/tsconfig/ts",
      "compilerOptions": {
        "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
        // To get the benefits of your runtime, we use runtime-specific API types here.
        "types": ["node"],
        // Allow importing JavaScript files
        "allowJs": true
      },
      // Your project files others than source & test files who are need type support
      "include": ["scripts/**/*", "*.ts", "*.js"]
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
