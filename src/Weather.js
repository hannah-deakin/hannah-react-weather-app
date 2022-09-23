import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "29d72df3f212ca58205d7001ac0bf3cf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="SearchForm">
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city..."
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} size={49} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading... ";
  }
}
