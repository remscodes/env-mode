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
npm install env-mode
```

## Usage

```ts
// global.d.ts 
declare global {
  namespace EnvMode {
    interface ModeMap {
      dev: string;
      prod: string;
    }
  }
}
```

```ts
import EnvMode from 'env-mode';

EnvMode.get(); // dev

EnvMode.in(['dev', 'prod']); // true
EnvMode.notIn(['dev', 'prod']); // false

EnvMode.is('dev'); // true
EnvMode.isNot('dev'); // false

const color = EnvMode.select({
  dev: 'blue',
  default: 'red',
});
console.log(color); // 'blue'
```

## Configuration

```ts
EnvMode.configure({ key: 'MY_ENV_KEY' });
```

## License

[MIT](LICENSE) © Rémy Abitbol.
