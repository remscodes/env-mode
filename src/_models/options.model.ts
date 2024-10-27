export interface Options {
  /**
   * Throws an `EnvModeException` if the env mode is empty (`undefined` or `""`).
   *
   * @default false
   */
  throwIfEmpty?: boolean;

  /**
   * Key of the env mode.
   *
   * @default "NODE_ENV"
   *
   * @example
   * // .env
   * DENO_ENV=dev
   *
   * // app.ts
   * EnvMode.configure({ key: 'DENO_ENV' });
   * const mode = EnvMode.get(); // "dev"
   */
  key?: string;

  /**
   * Source of the env mode.
   *
   * @default globalThis.process.env
   *
   * @example
   * // environment.ts
   * export const myEnvironment = {
   *    NODE_ENV: 'dev',
   * };
   *
   * // app.ts
   * import { myEnvironment } from './environment';
   *
   * EnvMode.configure({ source: myEnvironment });
   * const mode = EnvMode.get(); // "dev"
   */
  source?: Record<string, any>;
}
