import React from "react";
import { useWeather } from "../assets/context/Context";
import Weekly from "./Weekly";

function WeeklyWeather() {
  const { nextDay } = useWeather();

  return (
    <div className="Weather-list">
      {nextDay.map((nextDay, index) => {
        return <Weekly key={index} nextDay={nextDay} />;
      })}
    </div>
  );
}

export default WeeklyWeather;
