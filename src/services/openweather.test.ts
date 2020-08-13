import { forecastMock } from "../mocks/forecast"
import { fetchDailyForecast } from "./openweather"

const daily = [forecastMock]

const fetchMock = jest.spyOn(window, "fetch").mockImplementation(
  async url =>
    ({
      url,
      json: async () => ({
        daily,
      }),
    } as Response)
)

describe("openweather", () => {
  afterAll(() => {
    fetchMock.mockRestore()
  })

  it("returns proper response", async () => {
    const result = await fetchDailyForecast({ lat: 50, lon: 60 })

    expect(result).toEqual(daily)
  })
})
