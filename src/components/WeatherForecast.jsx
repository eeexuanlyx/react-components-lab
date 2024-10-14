import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <img src={props.img} alt={props.imgAlt} />
      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
      <WeatherIcon />
      <WeatherData />
    </div>
  );
};

export default WeatherForecast;
