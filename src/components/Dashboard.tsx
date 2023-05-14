import React from 'react';
import WeatherCard from './WeatherCard';
import IWeatherData from '../interfaces/IWeatherData';

interface DashboardProps {
  weatherData: IWeatherData;
}

const Dashboard: React.FC<DashboardProps> = ({ weatherData }) => {
  // destructuring the weatherData
  const { weather_descriptions, observation_time, wind_degree, visibility, feelslike, is_day, wind_dir, pressure, cloudcover, precip, uv_index, temperature, humidity, wind_speed } = weatherData;

  return (
    <div className="flex flex-wrap justify-center">
      <WeatherCard title="Weather Description" value={weather_descriptions[0]} />
      <WeatherCard title="Observation Time" value={observation_time} />
      <WeatherCard title="Wind Degree" value={wind_degree} />
      <WeatherCard title="Visibility" value={visibility} />
      <WeatherCard title="Feels Like" value={feelslike} />
      <WeatherCard title="Day/Night" value={is_day === 'yes' ? 'Day' : 'Night'} />
      <WeatherCard title="Wind Direction" value={wind_dir} />
      <WeatherCard title="Pressure" value={pressure} />
      <WeatherCard title="Cloud Cover" value={cloudcover} />
      <WeatherCard title="Precipitation" value={precip} />
      <WeatherCard title="UV Index" value={uv_index} />
      <WeatherCard title="Temperature" value={temperature} />
      <WeatherCard title="Humidity" value={humidity} />
      <WeatherCard title="Wind Speed" value={wind_speed} />
    </div>
  );
}

export default Dashboard;
