import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState(null);
  let [weatherCity, setWeatherCity] = useState(null);
  //weatherCity to ensure Weather is only properly called upon submit

  function handleSearch(event) {
    event.preventDefault();
    setWeatherCity(city.trim());
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
  console.log("Search called");
  if (weatherCity) {
    console.log("Weather called");
    return (
      <div className="Search">
        {/* <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
            className="form-control"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form> */}
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              onChange={updateCity}
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

        <Weather city={weatherCity} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        {/* <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form> */}
        <form onSubmit={handleSearch}>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              onChange={updateCity}
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
      </div>
    );
  }
}
