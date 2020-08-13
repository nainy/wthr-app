import React from "react"
import { message, Row, Col, Spin, PageHeader, Layout } from "antd"
import { fetchDailyForecast } from "./services/openweather"
import getLocation from "./services/location"
import { WeatherCard } from "./components/WeatherCard"

import { DailyForecast } from "./typings/common"

type AppState = {
  isLoading: boolean
  forecasts: undefined | DailyForecast[]
}

export const App: React.FC = () => {
  const [{ isLoading, forecasts }, setAppState] = React.useState<AppState>({ isLoading: true, forecasts: undefined })

  React.useEffect(() => {
    async function loadApp(): Promise<void> {
      try {
        const location = await getLocation()
        const forecasts = await fetchDailyForecast(location)

        setAppState({ isLoading: false, forecasts: forecasts.slice(0, 3) })
      } catch (error) {
        message.error("Something went wrong.")
      }
    }

    loadApp()
  }, [])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <PageHeader title="Weather Forecast, 3 days"></PageHeader>
      <Row justify="center" align="middle" style={{ height: "100%" }} gutter={16}>
        {isLoading && (
          <Col>
            <Spin size="large" data-testid="spinner" />
          </Col>
        )}
        {forecasts &&
          forecasts.map(forecast => {
            return (
              <Col key={forecast.dt} sm={10} lg={6} style={{ marginBottom: 16 }} data-testid="weather-card-wrapper">
                <WeatherCard forecast={forecast} />
              </Col>
            )
          })}
      </Row>
    </Layout>
  )
}
