interface IWeatherData {
    weather_descriptions: string[];
    observation_time: string;
    wind_degree: number;
    visibility: number;
    weather_icons: string[];
    feelslike: number;
    is_day: string;
    wind_dir: string;
    pressure: number;
    cloudcover: number;
    precip: number;
    uv_index: number;
    temperature: number;
    humidity: number;
    wind_speed: number;
  }
  
  export default IWeatherData;

  