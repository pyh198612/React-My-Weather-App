import React from "react";

export default function ForecastDate(props) {
  //let localTime = props.time.getTime();
  //let localOffset = props.time.getTimezoneOffset ()*60*1000;
  //let utc = localTime + localOffset;
  //let timezone = props.timezone*1000
  //let convertedLocalTimestamp = utc+timezone;
  //let newTime = new Date (convertedLocalTimestamp);

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.time.getDay()];


    return (
        <div className="ForecastDate">
           {day} 
        </div>);
}