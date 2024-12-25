export type TWeatherData = {
  name: string;
  coord: { lon: number; lat: number; };
  weather: { main: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: { speed: number };
  clouds: { all: number };
}

export type TBulkWeatherData = {
  cnt: number;
  list: TWeatherData[];
}