import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
let counter = 0;

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconID: response.data.weather[0].icon,
      ready: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleUpdateCity(event) {
    setCity(event.target.value.trim());
  }

  function search() {
    counter++;
    console.log(counter);
    const apiKey = "f82fa348ac5be4c0a63ee7d2f60d4443";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              onChange={handleUpdateCity}
              autoFocus="on"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
            <button className="btn btn-outline-secondary" type="submit">
              Current
            </button>
          </div>
        </form>

        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
