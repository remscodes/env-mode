import EnvMode from '../src/env-mode';
import './global';

EnvMode.get(); // "dev"
EnvMode.getOrThrow(); // "dev"

EnvMode.in(['dev', 'prod']); // true
EnvMode.notIn(['dev', 'prod']); // false

EnvMode.is('dev'); // true
EnvMode.isNot('dev'); // false

EnvMode.select({ // "blue"
  dev: 'blue',
  default: 'red',
});
