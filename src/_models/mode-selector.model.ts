export type ModeSelector<T> =
  &({ [env in EnvMode.Mode]?: T }
  & { default: T });
