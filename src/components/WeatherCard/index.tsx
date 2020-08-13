import React from "react"
import { Card, Col, Row, Divider, Statistic, Typography } from "antd"
import beaufortScale from "beaufort-scale"
import { DailyForecast } from "../../typings/common"
import { getHRDate, formatTemperature } from "../../helpers"

type Props = {
  forecast: DailyForecast
}

export const WeatherCard: React.FC<Props> = ({ forecast }) => {
  const [condition] = forecast.weather
  const windSpeed = beaufortScale(forecast.wind_speed)

  return (
    <Card
      title={getHRDate(forecast.dt)}
      extra={
        <Row justify="center">
          <Col style={{ textAlign: "center" }}>
            <img alt={condition.description} src={`http://openweathermap.org/img/wn/${condition.icon}@2x.png`} />
            <div>
              {formatTemperature(forecast.temp.min)} / {formatTemperature(forecast.temp.max)}
            </div>
          </Col>
        </Row>
      }
    >
      <Typography.Text>
        Expected: <b>{windSpeed.desc}</b>, <b>{condition.description}</b>
      </Typography.Text>
      <Divider />
      <Row justify="space-around" gutter={16}>
        <Col>
          <Statistic title="Humidity" suffix="%" value={forecast.humidity} precision={0} />
        </Col>
        <Col>
          <Statistic title="Cloudiness" suffix="%" value={forecast.clouds} />
        </Col>
        <Col>
          <Statistic title="Precipitation" suffix="mm" value={forecast.rain} />
        </Col>
        <Col>
          <Statistic title="Wind speed" suffix="m/s" value={forecast.wind_speed} />
        </Col>
      </Row>
    </Card>
  )
}
