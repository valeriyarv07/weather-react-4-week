import React, { useState } from "react";

import axios from 'axios';
import "./styles.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loading, setLoading] = useState(false);

  function showWeather(response) {
    setLoading(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "1bc31ae99edca4b6ba3766063c71acb9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} placeholder="Type a city" />
      <input type="submit" value="Search" />
    </form>
  );

  if (loading) {
    return (
      <div className="Weather">
        {searchForm}
        <ul className="dataWeather">
          <li>Temperature: {Math.round(weather.temperature)}ºC</li>
          <li>Description: {weather.description} </li>
          <li>Humidity: {weather.humidity}% </li>
          <li>Wind Speed: {weather.speed} m/h </li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return searchForm;
  }
}
