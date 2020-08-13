declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_OPEN_WEATHER_KEY: string
  }
}

declare module "beaufort-scale" {
  type BeaufortScale = {
    grade: number
    desc: string
  }
  function beaufortScale(speed: number): BeaufortScale
  export = beaufortScale
}
