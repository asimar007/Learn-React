import './App.css';

import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();
  //console.log(weather);
  useEffect(() => {
    // Get Current Location Here
    weather.fetchCurrentLocation();
  }, [weather])
  return (
    <>
      <div className="App">
        <h1>Weather App</h1>
        <Input />
        <Button onClick={weather.fetchData} value='search' />
        <Card />
        <Button value="Refresh" />
      </div>
    </>
  );
}

export default App;
