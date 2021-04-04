import React from "react";
import MinMaxTemperature from "./MinMaxTemperature";
import Precipitation from "./Precipitation";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  
  function currentTemp () {
    let currentTemp = Math.round(props.nowTemp);
    return `Now ${currentTemp} °C`;
  }

  function windSpeed (){
  let windSpeed = Math.round(props.wind*3600/1000);
  return `${windSpeed} km/h`;
}


  return (
    <div className="CurrentWeather">
      <h3>
        {currentTemp ()}
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
        <span><i className="fas fa-wind"></i> {windSpeed( )} </span>
      </p>
    </div>
  );
}
