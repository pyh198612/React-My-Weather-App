import React from "react";
import Time from "./Time";


import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1>{props.name}</h1>
      <div>
        <Time value={props.timeStamp} timezone={props.timezone} /> 
      </div>
    </div>
  );
}
