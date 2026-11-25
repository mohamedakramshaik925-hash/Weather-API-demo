
import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset
} from "lucide-react";

function WeatherDetails({ weather }) {

  const details = [
    {
      title: "Humidity",
      value: `${weather.main.humidity}%`,
      icon: <Droplets size={26} />
    },
    {
      title: "Wind Speed",
      value: `${weather.wind.speed} m/s`,
      icon: <Wind size={26} />
    },
    {
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: <Gauge size={26} />
    },
    {
      title: "Visibility",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
      icon: <Eye size={26} />
    },
    {
      title: "Sunrise",
      value: new Date(
        weather.sys.sunrise * 1000
      ).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      icon: <Sunrise size={26} />
    },
    {
      title: "Sunset",
      value: new Date(
        weather.sys.sunset * 1000
      ).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      }),
      icon: <Sunset size={26} />
    }
  ];

  return (
    <section className="weather-details">

      <h2>Today's Weather Highlights</h2>

      <div className="details-grid">

        {details.map((item, index) => (
          <div className="detail-card" key={index}>

            <div className="detail-icon">
              {item.icon}
            </div>

            <p>{item.title}</p>

            <h3>{item.value}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WeatherDetails;
