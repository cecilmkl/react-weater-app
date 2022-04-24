import React, { useState } from "react";
import Weather from "./Weather";

export default function Search(props) {
  //const [ready, setReady] = useState(false);
  //let [city, setCity] = useState(null);
  let city = ""; // not using state to avoid calling Weather when letters are added
  let [weatherCity, setWeatherCity] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(ready);
    //setReady(true);
    setWeatherCity({
      city: city,
      ready: true,
    });
  }
  function updateCity(event) {
    console.log(event.target.value.trim());
    // called when adding a letter in the form
    if (event.target.value.trim().length > 0) {
      city = event.target.value.trim();
    } else {
      // to ensure the data disappear when erased in form
      city = "";
    }
  }
  console.log(`CITY: ${city}`);

  if (!weatherCity.ready) {
    city = props.defaultCity;
  } else {
    city = weatherCity.city;
  }

  console.log(`Weather for ${city} called from Search`);
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
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

      <Weather city={city} />
    </div>
  );
}
