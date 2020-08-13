import { getHRDate, formatTemperature } from "./helpers"
import { addDays, format, getUnixTime } from "date-fns"

describe("helpers", () => {
  describe("getHRDate", () => {
    it.each([
      ["Today", getUnixTime(new Date())],
      ["Tomorrow", getUnixTime(addDays(new Date(), 1).getTime())],
      [format(addDays(new Date(), 10), "PP"), getUnixTime(addDays(new Date(), 10).getTime())],
    ])("returns a human-readable label: %s", (label: string, ts: number) => {
      expect(getHRDate(ts)).toEqual(label)
    })
  })
  describe("formatTemperatue", () => {
    it.each([
      ["+25°C", 25.0],
      ["-25°C", -25.0],
      ["0°C", 0],
    ])("returns formatted temperature: %s", (formattedTemp: string, temp: number) => {
      expect(formatTemperature(temp)).toEqual(formattedTemp)
    })
  })
})
