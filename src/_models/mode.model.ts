export type Mode = NSEnvMode.Mode

export type ModeOrEmpty =
  | Mode
  | Empty

export type Empty =
  | undefined
  | ''
