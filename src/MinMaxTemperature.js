import React from "react";

export default function MinMaxTemperature(props) {
  return (
    <div className="MinMaxTempearature">
      <span>{props.min} </span> °/ <span>{props.max}</span> °C
    </div>
  );
}
