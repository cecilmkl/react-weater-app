import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.data.city}</h1>
      <ul className="date-description">
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left weather-icon">
              <WeatherIcon
                iconID={props.data.iconID}
                alt={props.data.description}
              />
            </div>
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} m/s</li>
            <li>Precipitation: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
