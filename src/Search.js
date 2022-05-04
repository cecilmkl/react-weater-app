import React, { useState } from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
	let [weatherData, setWeatherData] = useState({ ready: false });
	let city = props.defaultCity;

	function displayWeather(response) {
		let rain = 0;
		if (response.data.hasOwnProperty("rain")) {
			rain = response.data.rain["1h"];
		}

		setWeatherData({
			city: response.data.name,
			coord: response.data.coord,
			date: new Date(response.data.dt * 1000),
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			iconID: response.data.weather[0].icon,
			rain: rain,
			ready: true,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function handleUpdateCity(event) {
		city = event.target.value.trim();
	}

	function search() {
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
				<Forecast coord={weatherData.coord} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
