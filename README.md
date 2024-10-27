<div align="center">
    <h1>Env Mode</h1>
    <p>A tiny, handy and strongly typed library for working with the env mode (NODE_ENV)</p>
</div>

<div align="center">

[![github ci](https://img.shields.io/github/actions/workflow/status/remscodes/env-mode/npm-ci.yml.svg?&logo=github&label=CI&style=for-the-badge)](https://github.com/remscodes/env-mode/actions/workflows/npm-ci.yml)
[![npm version](https://img.shields.io/npm/v/@remscodes/env-mode.svg?&style=for-the-badge&logo=npm)](https://www.npmjs.org/package/@remscodes/env-mode)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@remscodes/env-mode.svg?style=for-the-badge)](https://bundlephobia.com/package/@remscodes/env-mode)
[![license](https://img.shields.io/github/license/remscodes/env-mode.svg?style=for-the-badge)](LICENSE)

</div>

## Installation

```shell
npm install @remscodes/env-mode
```

### Note

This library does not load environment variables from a `.env` files.

It is supposed to be used in addition to a module or any framework that load these variables.

## Usage

[//]: # (@formatter:off)
```js
// .env
NODE_ENV=dev
```
[//]: # (@formatter:on)

#### Current value

Get the env mode value.

```ts
import EnvMode from '@remscodes/env-mode';

EnvMode.get(); // "dev"
EnvMode.getOrThrow(); // "dev"
```

#### Conditions

Build conditions based on the env mode.

```ts
import EnvMode from '@remscodes/env-mode';

EnvMode.is('dev'); // true
EnvMode.isNot('dev'); // false

EnvMode.in(['dev', 'prod']); // true
EnvMode.notIn(['dev', 'prod']); // false
```

#### Selection

Select a specific value depending on the env mode.

```ts
import EnvMode from '@remscodes/env-mode';

const color = EnvMode.select({ // "blue"
  dev: 'blue',
  default: 'red',
});
```

## Typed usage

Create a declaration file and add all your env mode values as follows.

```ts
// global.d.ts 
declare global {
  namespace NSEnvMode {
    interface ModeMap {
      dev,
      prod,
    }
  }
}

export {};
```

Include it into your `tsconfig.json`.

```json
// tsconfig.json
{
  // ...
  "include": [
    "global.d.ts"
  ]
}
```

Now your env modes can be autocompleted through methods.

## Configuration

### Throw

By default, if the env mode is empty (`undefined` or `""`), the methods work with this empty value.

You can choose to throw an exception from every methods if env mode is empty.

Example :

[//]: # (@formatter:off)
```js
// .env
NODE_ENV=
```
[//]: # (@formatter:on)

```ts
EnvMode.is('dev'); // false
```

```ts
EnvMode.configure({ throwIfEmpty: true });
EnvMode.is('dev'); // [EnvModeException: "NODE_ENV" is not defined in "globalThis.process.env".]
```

### Key

By default, it works with the `NODE_ENV` key.

You can change it as follows.

Example :

[//]: # (@formatter:off)
```js
// .env
DENO_ENV=dev
```
[//]: # (@formatter:on)

```ts
EnvMode.configure({ key: 'DENO_ENV' });
EnvMode.get() // "dev"
```

### Source

By default, it works with the `globalThis.process.env` source.

You can change it as follows.

Example :

```ts
// environment.ts
export const myEnvironment = {
  NODE_ENV: 'dev',
};
```

```ts
import { myEnvironment } from './environement.ts';

EnvMode.configure({ source: myEnvironment });
EnvMode.get(); // "dev"
```

## License

[MIT](LICENSE) © Rémy Abitbol.
