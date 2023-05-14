import { useQuery } from 'react-query';
import axios from 'axios';
import Dashboard from './Dashboard';
import IWeatherData from '../interfaces/IWeatherData';

function WeatherDataComponent() {
  const fetchWeatherData = async () => {
    const res = await axios.get('http://localhost:3001/weather-data');
    return res.data;
  };

  const { isLoading, isError, error, data } = useQuery('weatherData', fetchWeatherData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  let parsedBody = JSON.parse(data.body);
  const { weather_descriptions, observation_time, wind_degree, visibility, weather_icons, feelslike, is_day, wind_dir, pressure, cloudcover, precip, uv_index, temperature, humidity, wind_speed } = parsedBody.current;
  
  let weatherData: IWeatherData = {
      weather_descriptions,
      observation_time,
      wind_degree,
      visibility,
      weather_icons,
      feelslike,
      is_day,
      wind_dir,
      pressure,
      cloudcover,
      precip,
      uv_index,
      temperature,
      humidity,
      wind_speed,
  }
 console.log(weatherData);
  return (
    <div>
      <Dashboard weatherData={weatherData} />
    </div>
  );
}

export default WeatherDataComponent;