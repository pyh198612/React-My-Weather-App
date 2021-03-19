import React from "react";
import Date from "./Date";
import Day from "./Day";

import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1>{props.name}</h1>
      <p>
        <Date value={props.date} /> Today
      </p>
      <p>
        <Day value={props.day} />
      </p>
      <p>{props.time}</p>
    </div>
  );
}
