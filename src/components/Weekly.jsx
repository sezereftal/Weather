import React from "react";

function Weekly({ nextDay }) {
  return (
    <div className="Weekly">
      <span>{nextDay.date}</span>
      <img src={nextDay.day.condition.icon} />
      <span> Min {Math.round(nextDay.day.mintemp_c)}° </span>
      <span> Max {Math.round(nextDay.day.maxtemp_c)}° </span>
    </div>
  );
}

export default Weekly;
