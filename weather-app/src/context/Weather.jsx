import { createContext, useContext, useState } from "react";
import { getCityData, getCurrentLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    try {
      const response = await getCityData(searchCity);
      setData(response); // Set the fetched data instead of searchCity
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately, maybe set an error state
    }
  };

  const fetchCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  return (
    <>
      <WeatherContext.Provider
        value={{
          searchCity,
          data,
          setSearchCity,
          fetchData,
          fetchCurrentLocation,
        }}
      >
        {props.children}
      </WeatherContext.Provider>
    </>
  );
};
