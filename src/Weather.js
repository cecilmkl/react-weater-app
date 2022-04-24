import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  console.log(`Weather element called with city: ${props.city}`);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconID, setIcon] = useState(null);
  let [city, setCity] = useState(null);

  function displayWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setCity(response.data.name);
  }

  if (props.city !== null && temperature === null) {
    console.log(`Weather element called with city: ${props.city}`);

    // supposed to happen ONCE
    const apiKey = "f82fa348ac5be4c0a63ee7d2f60d4443";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }

  if (props.city === null) {
    return <div></div>;
  } else {
    console.log(iconID);
    let imgURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
    return (
      <div className="Weather">
        <h1>{city}</h1>
        <ul className="date-description">
          <li>Wednesday 07:00</li>
          <li>{description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={imgURL}
                alt="weather icon"
                className="float-left weather-icon"
              />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              {/* <li>Description: {description}</li> */}
              <li>Humidity: {humidity} %</li>
              <li>Wind: {wind} m/s</li>
              <li>Precipitation: </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
