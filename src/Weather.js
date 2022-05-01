import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function Weather(props) {
	return (
		<div className="Weather">
			<h1>{props.data.city}</h1>
			<ul className="date-description">
				<FormattedDate date={props.data.date} />
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row mt-2">
				<div className="col-8">
					<div className="clearfix">
						<div className="float-left weather-icon">
							<WeatherIcon
								iconID={props.data.iconID}
								alt={props.data.description}
								width={64}
							/>
						</div>
						<div className="float-left">
							<Temperature celsius={props.data.temperature} />
						</div>
					</div>
				</div>
				<div className="col-4 Weather-details">
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
