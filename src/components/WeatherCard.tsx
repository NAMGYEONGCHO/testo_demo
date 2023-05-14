import React from 'react';

interface WeatherCardProps {
  title: string;
  value: string | number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full md:w-auto">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
}

export default WeatherCard;
