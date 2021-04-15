import React, { useState, useEffect } from 'react'
import {
  WeatherWrapper,
  TemperatureDegree,
  LocationTimeZone,
  TemperatureDescription,
} from './Weather.styles'

const Weather = () => {
  const [weather, setWeather] = useState(null)
  const API_KEY = `e8144acf0d36044568fe30e0e3edf4dc` //token or key

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        const { longitude, latitude } = position.coords
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        fetch(api)
          .then((data) => data.json()) //json parser
          .then((res) => {
            setWeather(res)
          })
      }
    })
  }, [])

  const formatTemperature = (temp) => {
    return (temp - 273.15).toFixed(0)
  }

  return (
    <WeatherWrapper>
      <LocationTimeZone>
        {weather?.name},{weather?.sys?.country}
      </LocationTimeZone>
      <TemperatureDegree>
        {formatTemperature(weather?.main?.temp)}
        <span>&#8451;</span>
      </TemperatureDegree>
      <TemperatureDescription>
        {weather?.weather[0]?.description}
      </TemperatureDescription>
    </WeatherWrapper>
  )
}
export default Weather
