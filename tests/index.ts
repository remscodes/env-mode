import EnvMode from '../src/env-mode';

declare global {
  namespace EnvMode {
    interface ModeMap {
      dev: string;
      prod: string;
    }
  }
}

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
