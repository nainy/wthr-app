import { ForecastEnum, UnitEnum } from "../typings/enums"
import { DailyForecast } from "../typings/common"

const BASE_URL = "https://api.openweathermap.org/data/2.5/"

type FetchDailyForecastParams = {
  lat: number
  lon: number
}

type FetchDailyForecastResponse = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  [ForecastEnum.DAILY]: DailyForecast[]
}

export async function fetchDailyForecast({ lat, lon }: FetchDailyForecastParams): Promise<DailyForecast[]> {
  const url = new URL(`${BASE_URL}/onecall`)

  url.searchParams.append("lat", lat.toString())
  url.searchParams.append("lon", lon.toString())
  url.searchParams.append("units", UnitEnum.METRIC)
  url.searchParams.append("exclude", [ForecastEnum.CURRENT, ForecastEnum.MINUTELY, ForecastEnum.HOURLY].join(","))
  url.searchParams.append("appid", process.env.REACT_APP_OPEN_WEATHER_KEY)

  const res = await fetch(url.toString())
  const { daily }: FetchDailyForecastResponse = await res.json()

  return daily
}
