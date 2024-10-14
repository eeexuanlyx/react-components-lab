import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
      <WeatherData
        conditions={props.conditions}
        time={props.time}
        day={props.day}
      />
    </div>
  );
};

export default WeatherForecast;
