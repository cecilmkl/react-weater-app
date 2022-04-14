import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weatherCity, setWeatherCity] = useState(null);
  //weatherCity to ensure Weather is only properly called upon submit

  function handleSearch(event) {
    event.preventDefault();
    setWeatherCity(city);
  }
  function updateCity(event) {
    if (event.target.value.length > 0) {
      setCity(event.target.value);
    } else {
      // to ensure the data disappear when erased in form
      setCity(null);
      setWeatherCity(null);
    }
  }
  if (weatherCity) {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <Weather city={weatherCity} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
