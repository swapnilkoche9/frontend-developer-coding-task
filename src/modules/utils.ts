import { DayWeather } from "../dtos";

export const getFiveDaysForecast = (weatherData: DayWeather[]) => {
  return weatherData
    .sort((first: any, second: any) => {
      return parseInt(first.date) - parseInt(second.date);
    })
    .slice(0, 5);
};
