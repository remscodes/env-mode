import { ModeSelector } from './_models/mode-selector.model';
import './_models/global.d.ts';
import { Options } from './_models/options.model';
import { DEFAULT_KEY } from './env-mode.constants';

type Mode = EnvMode.Mode

export default class EnvMode {

  /** @internal */
  private static key = DEFAULT_KEY;

  public static configure(opts: Options) {
    if (opts.key) this.key = opts.key;
  }

  public static get(): Mode {
    return process.env[this.key] as Mode;
  }

  public static in(modes: Mode[]): boolean {
    return modes.includes(this.get());
  }

  public static notIn(modes: Mode[]): boolean {
    return !this.in(modes);
  }

  public static is(mode: Mode): boolean {
    return (mode === this.get());
  }

  public static isNot(mode: Mode): boolean {
    return !this.is(mode);
  }

  public static select<T>(selector: ModeSelector<T>): T {
    const mode: Mode = this.get();
    const value: T | undefined = selector[mode];
    return (value === undefined) ? selector.default : value;
  }
}
