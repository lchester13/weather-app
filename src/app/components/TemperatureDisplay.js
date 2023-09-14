// components/TemperatureDisplay.js

// import { useState } from 'react'
// import { apiRoute } from '../api/api'
 
export default async function TemperatureDisplay() {
  const [temperature, setTemperature] = useState(null);

  const fetchData = async () => {
    const data = await fetchWeatherData();
    setTemperature(data[0].value);
    }

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

 
  return (
    <div>
    <h1>Outdoor Temperature</h1>
    <p>Temperature: {temperature} °F</p>
  </div>
);
};