import React from "react"
import { render, wait } from "@testing-library/react"
import * as openweather from "./services/openweather"
import { forecastMock } from "./mocks/forecast"

import { App } from "./App"

const fetchDailyForecastMock = jest.spyOn(openweather, "fetchDailyForecast")

describe("App", () => {
  it("renders a spinner", () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId("spinner")).toBeInTheDocument()
  })

  it("renders forecasts", async () => {
    fetchDailyForecastMock.mockResolvedValueOnce([forecastMock])

    const { getAllByTestId } = render(<App />)

    await wait(() => expect(getAllByTestId("weather-card-wrapper")).toHaveLength(1))
  })

  it("shows error", async () => {
    fetchDailyForecastMock.mockRejectedValueOnce(undefined)

    const { getByText } = render(<App />)

    await wait(() => expect(getByText("Something went wrong.")).toBeInTheDocument())
  })
})
