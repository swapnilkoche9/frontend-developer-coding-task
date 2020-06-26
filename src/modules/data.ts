import { getHttp } from "./api";
import { CityForecast } from "../dtos";

const BASE_URL = `http://localhost:3000`;
//default headers
const headers = {
  "Content-Type": "application/json",
};

//method to get weather forecast by city
export const getWetherForecast = async (
  city: string
): Promise<CityForecast> => {
  const url = `${BASE_URL}/cities/${city}/`;
  const res = await getHttp(url, {
    headers,
  });

  return res.data;
};
