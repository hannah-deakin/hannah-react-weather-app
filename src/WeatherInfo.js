import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherOverview">
        <div className="overview">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>

      <div className="TemperatureOverview">
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>
              <div className="float-left">
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
