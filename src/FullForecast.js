import React from "react";
import ForecastDate from "./ForecastDate";
import ForecastDay from "./ForecastDay";
import Image from "./Image";

export default function FullForecast (props) {

   let time= new Date ((props.data.dt)*1000);
    //timezone: response.data.timezone_offset,
    let icon= props.data.weather[0].icon;
    let maxTemp=Math.round(props.data.temp.max);
    let minTemp=Math.round(props.data.temp.min);
    let rain=Math.round ((props.data.pop)*100);
    let wind=Math.round (props.data.wind_speed * 3600/1000);
    let description=props.data.weather[0].description;
    




    return (
        <div className = "FullForecast">
        <p />
          <div className="row align-items-center">
            <div className="col-1"/>
            <div className="col-2" >
             <ForecastDate time={time}/>
            </div>
            <div className="col-2" >
             <ForecastDay  time={time}/>
            </div>
            <div className="col-2">
              <Image icon={icon} description = {description} />
            </div>
            <div className="col-2">
              <span > {maxTemp}° / {minTemp} °C </span>
            </div>
            <div className="col-2">
              <i className="fas fa-umbrella"></i> {rain}% <br/>
              <i className="fas fa-wind"></i> {wind} km/h
            </div>
            <div className="col-1" />
            </div>
        <p />
        <hr/>
      </div> 
    )
}