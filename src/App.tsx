import { useState } from "react";
import { ForecastCard } from "./ForecastCard";
import CitySearchDropdown from "./dropdown";
import axios from "axios";

export default function App() {
  const [forecastData, setForecastData] = useState([]);
  const [locationInfo, setLocationInfo] = useState({ name: "", region: "" });

  const handleSearch = async (city_name: string) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key: import.meta.env.VITE_API_KEY,
            q: city_name,
            days: 3,
            aqi: "no",
            alerts: "no",
          },
        }
      );
      console.log(response);

      const data = response.data;

      const { name, region } = data.location;
      setLocationInfo({ name, region });

      const formattedForecast = data.forecast.forecastday.map((day: any) => ({
        date: day.date,
        day: {
          maxtemp_c: day.day.maxtemp_c,
          mintemp_c: day.day.mintemp_c,
          avghumidity: day.day.avghumidity,
          maxwind_kph: day.day.maxwind_kph,
          uv: day.day.uv,
          daily_chance_of_rain: day.day.daily_chance_of_rain,
          condition: {
            text: day.day.condition.text,
            icon: day.day.condition.icon,
          },
        },
        astro: {
          sunrise: day.astro.sunrise,
          sunset: day.astro.sunset,
        },
      }));

      setForecastData(formattedForecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-cyan-100 to-green-100 max:h-[auto] min-h-[100vh] flex items-center justify-center flex-col md:p-0 py-15 ">
      <h1 className="mb-10 text-black font-thin">WanderEasy</h1>
       {locationInfo.name && (
        <h2 className="mb-6 text-lg text-gray-700">
          Forecast for {locationInfo.name}, {locationInfo.region}
        </h2>
      )}
      <div className="w-[100vw]">
        <CitySearchDropdown handleSearch={handleSearch} />
      </div>
      <div className="flex items-center justify-center p-6 w-[100vw]">
        <ForecastCard forecast={forecastData} />
      </div>
    </div>
  );
}
