import React from "react";
import ForecastDate from "./ForecastDate";
import ForecastDay from "./ForecastDay";
import Image from "./Image";

export default function FullForecast (props) {

    let time= new Date ((props.data.dt)*1000);
    //timezone: response.data.timezone_offset,
    let icon= props.data.weather[0].icon;
    let description=props.data.weather[0].description;

    function maxTemp (){
      let maxTemp=Math.round(props.data.temp.max);
      return `${maxTemp} °`;
    }

    function minTemp (){
      let minTemp=Math.round(props.data.temp.min);
      return `${minTemp} °C`;
    }

    function rain (){
      let rain=Math.round ((props.data.pop)*100);
      return `${rain}%`;
    }

    function windSpeed (){
      let wind=Math.round (props.data.wind_speed * 3600/1000);
      return `${wind} km/h`;

    }


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
              <span > {maxTemp()} / {minTemp ()} </span>
            </div>
            <div className="col-2">
              <i className="fas fa-umbrella"></i> {rain()} <br/>
              <i className="fas fa-wind"></i> {windSpeed ()}
            </div>
            <div className="col-1" />
            </div>
        <p />
      </div> 
    )
}