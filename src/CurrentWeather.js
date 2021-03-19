import React from "react";
import MinMaxTemperature from "./MinMaxTemperature";
import PrecipitationWind from "./PrecipitationWind";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h3>
        Now <span>{props.nowTemperature}</span>°<span>C</span>
      </h3>
      <p>
        <MinMaxTemperature
          min={props.minTemperature}
          max={props.maxTemperature}
        />
      </p>
      <p>
        <div>{props.description}</div>
      </p>
      <p>
        <PrecipitationWind
          rainValue={props.precipitation}
          windValue={props.wind}
        />
      </p>
    </div>
  );
}
