
import { MapPin, ThermometerSun, CalendarDays } from "lucide-react";

function CurrentWeather({ weather }) {

  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="current-weather">

      <div className="weather-location">
        <MapPin size={20} />
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
      </div>

      <div className="weather-date">
        <CalendarDays size={16} />
        <span>{currentDate}</span>
      </div>

      <div className="temperature-section">

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="weather-icon"
        />

        <h1>{Math.round(weather.main.temp)}°C</h1>

      </div>

      <h3 className="weather-condition">
        {weather.weather[0].description}
      </h3>

      <div className="feels-like">
        <ThermometerSun size={20} />
        <span>
          Feels like {Math.round(weather.main.feels_like)}°C
        </span>
      </div>

    </div>
  );
}

export default CurrentWeather;
