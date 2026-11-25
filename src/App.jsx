
import { useState } from "react";

import Navbar from "./components/Navbar ";
import SearchBar from "./components/searchbar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";


import { getWeather } from "./services/weatherService";

import "./App.css";

function App() {

    const [city, setCity] = useState("Chennai");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const searchWeather = async () => {

        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        try {

            setLoading(true);
            setError("");

            const data = await getWeather(city);

            setWeather(data);

        } catch (err) {

            setError(err.message);
            setWeather(null);

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="app-container">

            <Navbar />

            <main className="main-content" id="home">

                <h1>Weather Dashboard</h1>

                <p className="subtitle">
                    Check the weather conditions in your city
                </p>

                <SearchBar
                    city={city}
                    setCity={setCity}
                    onSearch={searchWeather}
                    loading={loading}
                />

                {error && <p className="error-message">{error}</p>}

                {weather && (
                    <>
                        <CurrentWeather weather={weather} />

                        <WeatherDetails weather={weather} />
                    </>

                )}

            </main>

        </div>
    );
}

export default App;




