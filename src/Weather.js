import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

let counter = 0;

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{weatherData.city}</h1>
        <ul className="date-description">
          <FormattedDate date={weatherData.date} />
          {/* <li>{weatherData.date}</li> */}
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconURL}
                alt="{weatherData.description}"
                className="float-left weather-icon"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} m/s</li>
              <li>Precipitation: </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    counter += 1;
    console.log(`calling api for city: ${props.city} counter: ${counter}`);

    //supposed to happen ONCE
    const apiKey = "f82fa348ac5be4c0a63ee7d2f60d4443";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading...";
  }
}
