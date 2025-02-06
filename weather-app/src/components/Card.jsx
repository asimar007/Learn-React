import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  const image = weather.data?.current?.condition?.icon;

  return (
    <div className="card">
      <h3>{weather.data?.current?.condition?.text}</h3>
      <img src={image} alt="Weather Icon" />
      <h2>{weather.data?.current?.temp_c}°C</h2>
      <h5>
        {weather.data?.location?.name},{weather.data?.location?.region},
        {weather.data?.location?.country}
      </h5>
    </div>
  );
};

export default Card;
