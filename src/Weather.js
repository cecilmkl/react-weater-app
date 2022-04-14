import React, { useState } from "react";
import axios from "axios";

//import "./styles.css";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconID, setIcon] = useState(null);
  let [cityName, setCityName] = useState(null);

  function displayWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setCityName(response.data.name);
  }

  if (props.city !== null && temperature === null) {
    let apiKey = "f82fa348ac5be4c0a63ee7d2f60d4443";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (props.city === null) {
    return <div></div>;
  } else {
    let imgURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
    return (
      <div className="Weather">
        <h2>Weather in {cityName}:</h2>

        <ul>
          <li>
            <img src={imgURL} alt="test" width="42" />
          </li>
          <li>Temperature: {Math.round(temperature)} °C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} m/s</li>
        </ul>
      </div>
    );
  }
}
