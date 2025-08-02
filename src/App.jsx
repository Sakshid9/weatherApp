import React, { useState } from "react";
import axios from "axios";

const API_KEY = "05af8515532255e7de76bba8b26636a9";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      alert("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-400 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-white">Weather App 🌤️</h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="p-2 rounded border"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={fetchWeather}
          >
            Get Weather
          </button>
        </div>

        {loading && <p className="mt-4 text-white">Loading...</p>}

        {weather && (
          <div className="mt-6 bg-white p-4 rounded shadow-lg w-80 text-center">
            <h2 className="text-xl font-semibold">{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p className="text-3xl">{weather.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
