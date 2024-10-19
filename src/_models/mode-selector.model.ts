export type ModeSelector<T> =
  &({ [env in NSEnvMode.Mode]?: T }
  & { default: T });
