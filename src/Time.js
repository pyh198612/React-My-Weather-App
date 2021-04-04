import React from "react";

export default function Time (props) {
  let localTime = props.value.getTime();
  let localOffset = props.value.getTimezoneOffset ()*60*1000;
  let utc = localTime + localOffset;
  let timezone = props.timezone*1000
  let convertedLocalTimestamp = utc+timezone;
  let newTime = new Date (convertedLocalTimestamp);

  function showFullDate (){
    let date = newTime.getDate ();
    let newDate = (`0`+date).slice(-2);
    let month = newTime.getMonth()+1;
    let newMonth = (`0`+month).slice(-2);
    let year = newTime.getFullYear();
    return  `${newDate}.${newMonth}.${year} Today`;
  }

  function showDay (){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[newTime.getDay()];
    return `${day}`;
  }

  function showExactTime(){
    let minutes = newTime.getMinutes();
    if (minutes<10) {minutes = `0${minutes}`;}
    
    let hour = newTime.getHours();
    let timeUnit = "am";
    if (hour === 0) {hour = hour+12;}
    else if (hour === 12) {timeUnit = "pm";} 
    else if (hour > 12) {hour = (`0` +(hour-12)).slice(-2);
    timeUnit = "pm";}
    else if (hour < 10 && hour > 0) {hour = `0${hour}`;}

    return  `${hour}:${minutes} ${timeUnit}`;
  }

  
  return (
    <div className="Date">
      <div>
       {showFullDate()}
      </div>
      <div>
       {showDay()}
      </div>
      <div>
       {showExactTime()}
      </div>
    </div>
  );
}
