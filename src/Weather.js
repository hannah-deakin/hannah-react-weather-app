import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import SearchForm from "./SearchForm";
import WeatherOverview from "./WeatherOverview.js";
import TemperatureOverview from "./TemperatureOverview.js";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
  }

  let city = "Cartagena";
  let apiKey = "29d72df3f212ca58205d7001ac0bf3cf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <div className="SearchForm">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
      //
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
      //
      <div className="TemperatureOverview">
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  {" "}
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
