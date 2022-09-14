import React from "react";

export default function WeatherOverview() {
  let weatherData = {
    city: "Guatemala City",
    date: "Wed 8th June",
    time: "11:52",
    description: "Sunny with clouds",
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
