import React from "react";

export default function ForecastDate(props) {
  function showDate () {
    let date = props.time.getDate ();
    let newDate = (`0`+date).slice(-2);
    return `${newDate}`;
  }

  function showMonth(){
    let month = props.time.getMonth()+1;
    let newMonth = (`0`+month).slice(-2);
    return `${newMonth}`;
  }

  function showYear(){
    let year = props.time.getFullYear();
    return `${year}`;
  }


  return (
      <div className = "ForecastDate">
        {showDate()}.{showMonth()}.{showYear()}
      </div>
  );
}