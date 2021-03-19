import React from "react";

import "./Forecast.css";

export default function Forecast () {
    return ( 
      <div className = "Forecast">
        <p />
          <div className="row align-items-center">
            <div className="col-1"/>
            <div className="col-2">
              04.01.2021
            </div>
            <div className="col-2">
              Monday
            </div>
            <div className="col-2">
              <img src="IMG/broken clouds_04.png" alt="cloudy" className="small-image"/>
            </div>
            <div className="col-2">
              <span className="forecast-min-temp">0</span>° / 
              <span className="forecast-max-temp">3</span>°
              <span className="forecast-max-temp-unit">C</span>
            </div>
            <div className="col-2">
              <i className="fas fa-umbrella"></i> 20% <br/>
              <i className="fas fa-wind"></i> 10 km/h
            </div>
            <div className="col-1" />
            </div>
        <p />
      </div> 
    );
}