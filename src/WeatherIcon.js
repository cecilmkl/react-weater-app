import React from "react";

export default function WeatherIcon(props) {
  let iconURL = `http://openweathermap.org/img/wn/${props.iconID}@2x.png`;
  return (
    <img
      src={iconURL}
      alt={props.alt}
      width={props.width}
      className="float-left weather-icon"
    />
  );
}
