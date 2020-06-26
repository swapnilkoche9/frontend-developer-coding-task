import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import Weather from "./weather";
import TextBox from "../../component/TextBox";
import { DayWeather } from "../../dtos";
import { getWetherForecast } from "../../modules/data";
import { getFiveDaysForecast } from "../../modules/utils";
import WeatherDetails from "./weatherDetails";

const WeatherContainer: FC = () => {
  const [city, setCity] = useState<string>("hamburg");
  const [currentCity, setCurrentCity] = useState("hamburg");
  const [weatherForecast, setWeatherForecast] = useState<DayWeather[]>();
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  useEffect(() => {
    const getForecast = async (city: string) => {
      const { forecast } = await getWetherForecast(city);
      const fiveDaysForecast = getFiveDaysForecast(forecast);
      setWeatherForecast(fiveDaysForecast);
    };
    getForecast(currentCity.toLowerCase());
  }, [currentCity]);

  const handleSubmit = (e: React.FormEvent) => {
    if (city) setCurrentCity(city);
    else setCity(currentCity);

    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(true);
  };

  return (
    <div>
      {weatherForecast && (
        <Weather temperature={weatherForecast[0].temperature}>
          <TextBoxWrapper onSubmit={handleSubmit}>
            <TextBox
              id="cityName"
              type="text"
              value={city}
              placeholder="Enter City"
              onChange={handleChange}
              onFocus={onInputFocus}
            />
          </TextBoxWrapper>
          <WeatherDetails />
        </Weather>
      )}
    </div>
  );
};

const TextBoxWrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export default WeatherContainer;
