import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function apiRoute(NextApiRequest, NextApiResponse) {
  try {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=37.7749&longitude=-122.4194&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FLos_Angeles&start_date=2023-09-01&end_date=2023-09-15');

    // Parse and process the response data as needed
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();

    console.log('Fetched Weather Data:', data);

    return data.hourly.temperature_2m;

    

    // Return the data to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data from API' });
  }
}