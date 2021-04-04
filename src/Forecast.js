import React,{ useState, useEffect } from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate";
import ForecastDay from "./ForecastDay";
import Image from "./Image";

import "./Forecast.css";

export default function Forecast (props) {
  const[ready,setReady] = useState (false);
  const[forecast, setForecast] = useState ("");

  
 useEffect (() => {
   setReady  (false);
 }, [props.coordinates]);

function handleForecastResponse (response) {
  console.log (response.data);
  setForecast (
    { time: new Date ((response.data.daily[1].dt)*1000),
      timezone: response.data.timezone_offset,
      icon: response.data.daily[1].weather[0].icon,
      maxTemp:Math.round(response.data.daily[1].temp.max),
      minTemp:Math.round(response.data.daily[1].temp.min),
      rain: Math.round ((response.data.daily[1].pop)*100),
      wind: Math.round (response.data.daily[1].wind_speed * 3600/1000),
      description: response.data.daily[1].weather[0].description,
    }
    );
  setReady (true);
}





if (ready) {
    return ( 
      <div className = "Forecast">
        <p />
          <div className="row align-items-center">
            <div className="col-1"/>
            <div className="col-2" >
             <ForecastDate time={forecast.time} timezone={forecast.timezone}/>
            </div>
            <div className="col-2" >
             <ForecastDay  time={forecast.time} timezone={forecast.timezone}/>
            </div>
            <div className="col-2">
              <Image icon={forecast.icon} description = {forecast.description} />
            </div>
            <div className="col-2">
              <span > {forecast.maxTemp}° / {forecast.minTemp} °C </span>
            </div>
            <div className="col-2">
              <i className="fas fa-umbrella"></i> {forecast.rain}% <br/>
              <i className="fas fa-wind"></i> {forecast.wind} km/h
            </div>
            <div className="col-1" />
            </div>
        <p />
      </div> 
    ); 
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let excludes = "current,hourly,minutely,alerts";
    let apiKey = "3cbad6f9a349042eb44901a3bdcb3200";
    let apiOneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludes}&appid=${apiKey}&units=metric`;
    axios.get (apiOneCallUrl).then(handleForecastResponse);
    
    return null;
  }
}