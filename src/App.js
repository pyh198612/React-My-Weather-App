import React, {useState} from "react";
import City from "./City";
import Image from "./Image";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import axios from "axios";

import './App.css';

export default function App() {
const [weatherData, setWeatherData] = useState ({ready:false});
const [city, setCity] = useState ("Hamburg");

function handleResponse (response) {
  //console.log (response.data);
  setWeatherData ({
    ready:true,
    city:response.data.name,
    date: new Date(response.data.dt*1000),
    currentTemp: response.data.main.temp, 
    icon: response.data.weather[0].icon,
    coordinates:response.data.coord,
    lon:response.data.coord.lon,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    timezone: response.data.timezone,
  });
}

function search () {
  const apiKey = "3a9100c603465e570bc2bcef2b73f0f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit (event) {
  event.preventDefault ();
  search ();
}

function handleCityChange (event) {
 setCity (event.target.value);
}


if (weatherData.ready) {
  return (
    <div className="App">
      <div className="main-session">
        <div className="row align-items-center">
          <div className="col-1">
            <i className="fas fa-location-arrow"></i>
          </div>
          <div className="col-4">
            <City
              name={weatherData.city}
              timeStamp= {weatherData.date}
              timezone = {weatherData.timezone}
              />
          </div>
          <div className="col-3">
            <Image icon={weatherData.icon} description = {weatherData.description}/>
          </div>
          <div className="col-4">
            <CurrentWeather
              nowTemp={weatherData.currentTemp}
              coordinates = {weatherData.coordinates}
              description={weatherData.description}
              wind={weatherData.wind}
              />
          </div>
        </div>
      </div>

      <div className="forecast-session">
        <Forecast coordinates = {weatherData.coordinates} /> 
      </div> 

      <div className="search-session">
        <form onSubmit = {handleSubmit}>
          <div className="row">
            <div className="col-1"/>
            <div className="col-4">
              <div className="form-group">
                <input type="search" className="form-control" placeholder="Enter another city" onChange={handleCityChange}/>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <input type="submit" value="Search" className="form-control rounded-pill search-button" autoComplete="on" />
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <input type="submit" value="My Location" className="form-control rounded-pill current-button" autoComplete="on" />
              </div>
            </div>
          </div>
        </form> 
      </div>
    <footer>The project was coded by <span className="coder">Jennifer Hsieh</span> and is <a href="https://github.com/pyh198612/React-My-Weather-App" className="github-link" target="_blank" rel="noreferrer"> open-sourced on GitHub </a> and <a href="https://flamboyant-saha-2d733d.netlify.app/" className="hosting-link">hosted on Netlify</a></footer> 
    </div>
  );
} else {
  search ();
  return "Loading... ";
}
}



  
