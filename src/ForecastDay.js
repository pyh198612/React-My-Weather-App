import React from "react";

export default function ForecastDay(props) {

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.time.getDay()];

    return (
        <div className="ForecastDay">
           {day} 
        </div>);
}