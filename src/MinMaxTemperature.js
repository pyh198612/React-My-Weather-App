import React, {useState, useEffect} from "react";
import axios from "axios";

export default function MinMaxTemperature(props) {
  const [ready, setReady] = useState (false);
  const [temp, setTemp] = useState ("");

  useEffect (() => {
    setReady  (false);
  }, [props.coordinates]);

  function handleResponse (response) {
    setReady (true);
    setTemp ({
      min: Math.round (response.data.daily[0].temp.min),
      max: Math.round (response.data.daily[0].temp.max),
      }
    )
  }

  function searchMinMax () {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let excludes = "current,hourly,minutely,alerts";
    let apiKey = "3cbad6f9a349042eb44901a3bdcb3200";
    let apiOneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludes}&appid=${apiKey}&units=metric`;
    axios.get (apiOneCallUrl).then(handleResponse);
  }


  
  if (ready) {
    return (
      <span className="MinMaxTempearature"> {temp.max} ° /{""} {temp.min} °C</span>
  );
} else {
  searchMinMax ();
  return null;

  }

}
