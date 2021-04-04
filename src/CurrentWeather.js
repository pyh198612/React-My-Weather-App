import React from "react";
import MinMaxTemperature from "./MinMaxTemperature";
import Precipitation from "./Precipitation";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let windSpeed = Math.round(props.wind*3600/1000);

  return (
    <div className="CurrentWeather">
      <h3>
        Now <span>{Math.round(props.nowTemp)}</span>°<span>C</span>
      </h3>
      <p>
        <MinMaxTemperature
          coordinates = {props.coordinates}
        />
      </p>
      <p className="description">
        {props.description}
      </p>
      <p>
        <span> <Precipitation coordinates = {props.coordinates} /> </span> {""}{""}
        <span><i className="fas fa-wind"></i> {windSpeed} km/h </span>
      </p>
    </div>
  );
}
