import axios from "axios";
import React , {useState, useEffect} from "react";

export default function Precipitation(props) {
  const [ready, setReady] = useState (false);
  const [precipitation, setPrecipitation] = useState ("");

  useEffect (() => {
   setReady  (false);
 }, [props.coordinates]);

  function handleResponse (response) {
    setReady (true);
    setPrecipitation (response.data.daily[0].pop*100);
  }  

  function searchPrecipitation () {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let excludes = "current,hourly,minutely,alerts";
    let apiKey = "3cbad6f9a349042eb44901a3bdcb3200";
    let apiOneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludes}&appid=${apiKey}&units=metric`;
    axios.get (apiOneCallUrl).then(handleResponse);
  }


  
  if (ready) {
    return (
      <span className="Precipitation">
        <i className="fas fa-umbrella"></i> <span>{Math.round(precipitation)}</span> %
    </span>
  );
} else {
  searchPrecipitation ();
  return null;
  }
}
