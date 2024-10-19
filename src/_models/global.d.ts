declare global {

  namespace NSEnvMode {

    interface ModeMap {}

    type Mode = keyof ModeMap;
  }
}

export {};
