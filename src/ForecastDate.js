import React from "react";

export default function ForecastDate(props) {
  let localTime = props.time.getTime();
  let localOffset = props.time.getTimezoneOffset ()*60*1000;
  let utc = localTime + localOffset;
  let timezone = props.timezone*1000
  let convertedLocalTimestamp = utc+timezone;
  let newTime = new Date (convertedLocalTimestamp);

  let date = newTime.getDate ();
  let newDate = (`0`+date).slice(-2);
  let month = newTime.getMonth()+1;
  let newMonth = (`0`+month).slice(-2);
  let year = newTime.getFullYear();


    return (
        <div className = "ForecastDate">
            
              {newDate}.{newMonth}.{year}
             
        </div>
    );
}