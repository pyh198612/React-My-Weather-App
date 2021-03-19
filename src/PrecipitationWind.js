import React from "react";

export default function PrecipitationWind(props) {
  return (
    <div className="PrecipitationWind">
      <span>
        <i className="fas fa-umbrella"></i> <span>{props.rainValue}</span> %
      </span>{" "}
      <span />
      <span>
        <i className="fas fa-wind"></i> <span>{props.windValue}</span> km/h
      </span>
    </div>
  );
}
