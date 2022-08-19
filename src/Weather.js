import React from "react";
import "./Weather.css";
import "./App.css";
export default function Weather() {
  return (
    <div className="container">
      <div className="weather-container">
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
                <input type="submit" value="Search" class="btn btn-secondary" />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>Dallas</h1>
            <div class="time">
              Last Updated: Thursday 9:00<span id="date"></span>
            </div>
            <div class="description">Clear</div>
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
                <span class="float-center">
                  <strong id="temperature">88</strong>
                  <span className="units">
                    <a href="/">°C</a>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-6">
              <div class="precip">Precipitation: 0%</div>
              <div class="wind">Wind: 10 mph</div>
            </div>
          </div>
        </div>
        <div class="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
