import React from "react";
import "./Weather.css";
import SearchForm from "./SearchForm";
import WeatherOverview from "./WeatherOverview.js";
import TemperatureOverview from "./TemperatureOverview.js";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchForm />
      <WeatherOverview />
      <TemperatureOverview />
    </div>
  );
}
