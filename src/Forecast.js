import React,{ useState, useEffect } from "react";
import axios from "axios";
import FullForecast from "./FullForecast";


import "./Forecast.css";

export default function Forecast (props) {
  const[ready,setReady] = useState (false);
  const[forecast, setForecast] = useState ("");

  
 useEffect (() => {
   setReady  (false);
 }, [props.coordinates]);

function handleForecastResponse (response) {
    setForecast (response.data.daily);
    setReady (true);
  }
  
function searchForecast (){
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let excludes = "current,hourly,minutely,alerts";
  let apiKey = "3cbad6f9a349042eb44901a3bdcb3200";
  let apiOneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludes}&appid=${apiKey}&units=metric`;
  axios.get (apiOneCallUrl).then(handleForecastResponse);
}



if (ready) {
    return ( 
      <div className = "Forecast">
        {forecast.map (function (dailyForecast, index) {
          if (index <6 && index > 0 ) {
            return (
            <div key={index}>
               <FullForecast data = {dailyForecast} />
            </div>
          );} else {
            return null;
          }
        })}
      </div>
    ); 
  } else {
    searchForecast ();
    return null;
  }
}