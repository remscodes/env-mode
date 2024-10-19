declare global {

  namespace EnvMode {

    interface ModeMap {}

    type Mode = keyof ModeMap;
  }
}

export {};
