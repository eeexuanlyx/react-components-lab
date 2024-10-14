import React from "react";

const WeatherIcon = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.imgAlt} />
    </div>
  );
};

export default WeatherIcon;
