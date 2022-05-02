import React from "react";

export default function Precipitation(props) {
	if (props.rain !== 0) {
		return <li>Precipitation: {props.rain} mm</li>;
	} else {
		return null;
	}
}
