import React from "react"
import { render } from "@testing-library/react"
import beaufortScale from "beaufort-scale"
import { forecastMock } from "../../mocks/forecast"
import { getHRDate, formatTemperature } from "../../helpers"
import { WeatherCard } from "./"

describe("WeatherCard", () => {
  it("renders the title", () => {
    const { getByText } = render(<WeatherCard forecast={forecastMock} />)

    expect(getByText(getHRDate(forecastMock.dt))).toBeInTheDocument()
  })

  it("renders the icon", () => {
    const { getByAltText } = render(<WeatherCard forecast={forecastMock} />)

    const image = getByAltText(forecastMock.weather[0].description)

    expect(image).toBeInTheDocument()
    expect(image.getAttribute("src")).toContain(forecastMock.weather[0].icon)
  })

  it("renders the temperature", () => {
    const { getByText } = render(<WeatherCard forecast={forecastMock} />)

    expect(
      getByText(`${formatTemperature(forecastMock.temp.min)} / ${formatTemperature(forecastMock.temp.max)}`)
    ).toBeInTheDocument()
  })

  it("renders weather conditions", () => {
    const { getByText } = render(<WeatherCard forecast={forecastMock} />)
    const windSpeed = beaufortScale(forecastMock.wind_speed)

    expect(getByText(forecastMock.weather[0].description)).toBeInTheDocument()
    expect(getByText(windSpeed.desc)).toBeInTheDocument()
  })
})
