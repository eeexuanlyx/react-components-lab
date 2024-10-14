import React from "react";

const WeatherData = (props) => {
  return (
    <div>
      <h2>{props.day}</h2>
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherData;
