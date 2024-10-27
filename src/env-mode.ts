import './_models/global.d.ts';
import { ModeSelector } from './_models/mode-selector.model';
import { Empty, Mode, ModeOrEmpty } from './_models/mode.model';
import { Options } from './_models/options.model';
import { DEFAULT_KEY, DEFAULT_SOURCE, DEFAULT_THROW_IF_EMPTY } from './env-mode.constants';
import { EnvModeException } from './env-mode.exception';

export default class EnvMode {

  /** @internal */
  private static throwIfEmpty = DEFAULT_THROW_IF_EMPTY;
  /** @internal */
  private static key = DEFAULT_KEY;
  /** @internal */
  private static source = DEFAULT_SOURCE;

  public static configure(opts: Options): void {
    const { throwIfEmpty, key, source } = opts;

    if (throwIfEmpty) this.throwIfEmpty = throwIfEmpty;
    if (key) this.key = key;
    if (source) this.source = source;
  }

  public static get(): Mode {
    return this.getGuardedMode();
  }

  public static getOrThrow(): Mode {
    return this._getOrThrow();
  }

  public static is(mode: Mode): boolean {
    return (mode === this.get());
  }

  public static isNot(mode: Mode): boolean {
    return !this.is(mode);
  }

  public static in(modes: Mode[]): boolean {
    return modes.includes(this.get());
  }

  public static notIn(modes: Mode[]): boolean {
    return !this.in(modes);
  }

  public static select<T>(selector: ModeSelector<T>): T {
    const value: T | undefined = selector[this.get()];
    return (value === undefined) ? selector.default : value;
  }

  /** @internal */
  public static getGuardedMode(): Mode {
    return (this.throwIfEmpty) ? this._getOrThrow() : this._get();
  }

  /** @internal */
  public static _getOrThrow(): Mode {
    const mode: Mode = this._get();
    this.guard(mode);
    return mode;
  }

  /** @internal */
  public static _get(): Mode {
    return this.source[this.key] as Mode;
  }

  /** @internal */
  private static guard(mode: ModeOrEmpty): mode is Mode {
    if (this.isEmpty(mode)) throw new EnvModeException(`"${this.key}" is not defined in "${this.source.toString()}".`);
    return true;
  }

  /** @internal */
  private static isEmpty(mode: ModeOrEmpty): mode is Empty {
    return (mode === undefined)
      || (mode === '');
  }
}
