import React from "react";
import { useWeather } from "../assets/context/Context";

function CurrentWeather() {
  const { weather, icon, city, day } = useWeather();

  return (
    <div className="current-weather">
      <div className="current-weather-left">
        <img width={"90px"} src={icon} />
        <span className="current-weather-left-span">{weather}</span>
      </div>
      <div className="current-weather-right">
        <p className="P">{day}</p>
        <p className="P"> {weather} °</p>
      </div>
      <div>
        <img className="P" src={icon} alt="" />
      </div>
    </div>
  );
}

export default CurrentWeather;
