import axios from "axios";
import React , {useState} from "react";

export default function Precipitation(props) {
  const [precipitation, setPrecipitation] = useState ({ready:false});

  function handleResponse (response) {
    setPrecipitation ({
      ready: true,
      rain: Math.round ((response.data.daily[0].pop)*100),
      }
    )
  }


  
  if (precipitation.ready) {
    return (
      <span className="Precipitation">
        <i className="fas fa-umbrella"></i> <span>{precipitation.rain}</span> %
    </span>
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
