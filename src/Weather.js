import React from "react";
import "./Weather.css";
import "./App.css";
export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="Weather">
          <form id="search-form" class="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1 id="city">Dallas</h1>
            <ul>
              <li>
                Last Updated: Thursday 9:00<span id="date"></span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="Clear"
                  id="icon"
                  class="float-left"
                />
                <span class="float-left">
                  <strong id="temperature">88</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity:%</li>
                <li>Wind:10 mph</li>
              </ul>
            </div>
          </div>

          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
