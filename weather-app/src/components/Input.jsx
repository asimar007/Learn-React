import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();
  // Provide a default value if weather.searchCity is null
  const cityValue = weather.searchCity || "";

  return (
    <>
      <input
        className="input-field"
        placeholder="city name"
        value={cityValue}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
    </>
  );
};

export default Input;
