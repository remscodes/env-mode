import { Mode } from './mode.model';

export type ModeSelector<T> =
  & ({ [env in Mode]?: T }
  & { default: T });
