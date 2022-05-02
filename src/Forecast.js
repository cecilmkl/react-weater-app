import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./Forecast.css";

let count = 0;

export default function Forecast(props) {
	count++;
	console.log("Called forecast element" + count);
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coord]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (!loaded) {
		const apiKey = "f82fa348ac5be4c0a63ee7d2f60d4443";
		let latitude = props.coord.lat;
		let longitude = props.coord.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

		axios.get(apiUrl).then(handleResponse);
		return null;
	} else {
		return (
			<div className="Forecast">
				<div className="row">
					{forecast.map((forecastDay, index) => {
						if (index > 0 && index < 7) {
							return (
								<div className="col" key={index}>
									<ForecastDay data={forecast[index]} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	}
}
