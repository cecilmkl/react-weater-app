import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dayOfMonth = props.date.getDate();
  let year = props.date.getFullYear();

  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  hour = ("0" + hour).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  return (
    <div className="FormattedDate">
      {day} {hour}:{minutes}, {month} {dayOfMonth}, {year}
    </div>
  );
}
