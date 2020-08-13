import { fromUnixTime, isToday, isTomorrow, format } from "date-fns"

export function getHRDate(timestamp: number): string {
  const date = fromUnixTime(timestamp)

  if (isToday(date)) {
    return "Today"
  }

  if (isTomorrow(date)) {
    return "Tomorrow"
  }

  return format(date, "PP")
}

export function formatTemperature(temperature: number): string {
  return `${Math.sign(temperature) === 1 ? "+" : ""}${temperature.toFixed(0)}°C`
}
