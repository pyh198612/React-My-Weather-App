import logo from './logo.svg';
import LocationArrow from "./LocationArrow";
import City from "./City";
import Image from "./Image";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";
import SearchButton from "./SearchButton";
import MyLocationButton from "./MyLocationButton";
import Forecast from "./Forecast";


import './App.css';

export default function App() {
 return (
    <div className="App">
      <div className="main-session">
        <div className="row align-items-center">
          <div className="col-1">
            <LocationArrow />
          </div>
          <div className="col-4">
            <City
              name="Hamburg"
              date="03.01.2021"
              day="Sunday"
              time="11:40 am"
            />
          </div>
          <div className="col-3">
            <Image />
          </div>
          <div className="col-4">
            <CurrentWeather
              nowTemperature={2}
              minTemperature={0}
              maxTemperature={4}
              description="Rainy"
              precipitation={80}
              wind={2.5}
            />
          </div>
        </div>
      </div>

      <div className="forecast-session">
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        
      </div> 

      <div className="search-session">
        <form>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-4">
              <Search />
            </div>
            <div className="col-3">
              <SearchButton />
            </div>
            <div className="col-3">
              <MyLocationButton />
            </div>
          </div>
        </form>
      </div>
    <footer>The project was coded by <span className="coder">Jennifer Hsieh</span> and is <a href="https://github.com/pyh198612/weather-app-project" className="github-link" target="_blank"> open-sourced on GitHub </a> and <a href="https://ecstatic-poitras-d2bba5.netlify.app" className="hosting-link">hosted on Netlify</a></footer> 
    </div>
  );
}



