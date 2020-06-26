export interface DayWeather {
  data: string;
  temperature: number;
}

export interface CityForecast {
  id: string;
  forecast: DayWeather[];
}
