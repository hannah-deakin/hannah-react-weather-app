import React from "react";
import "./WeatherOverview.css";

export default function WeatherOverview() {
  let weatherData = {
    city: "Cartagena",
    date: "Thu 15th Sep",
    time: "12:58",
    description: "Sunny",
  };
  return (
    <div className="WeatherOverview">
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: {weatherData.date}, {weatherData.time}
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
    </div>
  );
}
