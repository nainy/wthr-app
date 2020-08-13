type Temperature = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

type FeelsLike = {
  day: number
  night: number
  eve: number
  morn: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

export type DailyForecast = {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  feels_like: FeelsLike
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  weather: Weather[]
  clouds: number
  pop: number
  rain: number
  uvi: number
}
