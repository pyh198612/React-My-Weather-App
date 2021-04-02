import React, {useState} from "react";
import axios from "axios";

export default function MinMaxTemperature(props) {

  const [temp, setTemp] = useState ({ready:false});

  function handleResponse (response) {
    setTemp ({
      ready: true,
      min: Math.round (response.data.daily[0].temp.min),
      max: Math.round (response.data.daily[0].temp.max),
      }
    )
  }


  
  if (temp.ready) {
    return (
      <div className="MinMaxTempearature">
        <span>{temp.min} </span> °/ <span>{temp.max}</span> °C
      </div>
  );
} else {
  let longitude = props.lon;
  let latitude = props.lat;
  let excludes = "current,hourly,minutely,alerts";
  let apiKey = "3cbad6f9a349042eb44901a3bdcb3200";
  let apiOneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludes}&appid=${apiKey}&units=metric`;
  axios.get (apiOneCallUrl).then(handleResponse);

  return null;

  }

}
