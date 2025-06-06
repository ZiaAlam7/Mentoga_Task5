type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avghumidity: number;
    maxwind_kph: number;
    uv: number;
    daily_chance_of_rain: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
};

export const ForecastCard = ({ forecast }: { forecast: ForecastDay[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4  md:w-auto w-[100%]">
      {forecast.map((day) => (
        <div
          key={day.date}
          className="bg-white rounded-2xl shadow-md p-9 text-md flex flex-col items-center space-y-3 "
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </h3>

          <img
            src={day.day.condition.icon}
            alt={day.day.condition.text}
            className="w-16 h-16"
          />
          <p className="text-lg font-medium text-gray-700">{day.day.condition.text}</p>

          <div className="text-gray-600 flex flex-col items-center gap-5 ">
            <p className="text-xl font-bold">{day.day.mintemp_c}°C - {day.day.maxtemp_c}°C</p>
            <div className="md:flex gap-10">
            <div>
            <p>💧 Humidity: {day.day.avghumidity}%</p>
            <p>💨 Wind: {day.day.maxwind_kph} kph</p>
            <p>☀️ UV Index: {day.day.uv}</p>
            </div>
            <div>
            <p>🌧️ Rain Chance: {day.day.daily_chance_of_rain}%</p>
            <p>🌅 Sunrise: {day.astro.sunrise}</p>
            <p>🌇 Sunset: {day.astro.sunset}</p>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
