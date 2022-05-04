import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
	function day() {
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let day = new Date(props.data.dt * 1000).getDay();
		return days[day];
	}

	return (
		<div className="ForecastDay">
			<div className="Forecast-day">{day()}</div>
			<WeatherIcon
				iconID={props.data.weather[0].icon}
				alt={props.data.weather[0].description}
				width={36}
			></WeatherIcon>
			<div className="Forecast-div">
				<span className="Forecast-temp-max">
					{Math.round(props.data.temp.max)}°
				</span>{" "}
				|{" "}
				<span className="Forecast-temp-min">
					{Math.round(props.data.temp.min)}°
				</span>
			</div>
		</div>
	);
}
