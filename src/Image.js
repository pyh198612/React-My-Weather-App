import React from "react";

import "./Image.css";

export default function Image(props) {
  let icon = props.icon;
  if (icon === "01d") { icon = "/img/sunny_01d.png"; }  
  else if (icon === "01n") { icon = "/img/clear sky_01n.png"; }  
  else if (icon === "02d") { icon = "/img/cloudy with sun_02d.png"; }  
  else if (icon === "02n") { icon = "/img/few clouds_02n.png"; } 
  else if (icon === "03d" || icon === "03n") {icon = "/img/scattered clouds_03.png";}
  else if (icon === "04d" || icon === "04n") {icon = "/img/broken clouds_04.png";}
  else if (icon === "09d" || icon === "09n") {icon = "/img/shower rain_09.png";}
  else if (icon === "10d") { icon = "/img/rain_10d.png"; }  
  else if (icon === "10n") { icon = "/img/rain_10n.png"; } 
  else if (icon === "11d" || icon === "11n") {icon = "/img/thunderstorm_11.png";}
  else if (icon === "13d" || icon === "13n") {icon = "/img/snow_13.png";}
  else if (icon === "50d" || icon === "50n") {icon = "/img/mist_50.png";}

  return <img className="Image" src={icon} alt = "/" />;
}
