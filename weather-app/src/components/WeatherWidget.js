import React, { useState, useEffect } from 'react';
import CitySelector from './CitySelector';
import getWeather from '../services/weatherService';

export default function WeatherWidget() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (city) {
          getWeather(city)
            .then((data) => setWeather(data))
            .catch((error) => console.error(error));
        }
      }, [city]);

    return (
        <div>
        <CitySelector setCity={setCity} />   
            {weather && (
            <div>                    
                <h4>{weather.name}, {weather.sys.country}</h4>
                <p>{weather.weather[0].description}</p>
                <p>Temperature: {weather.main.temp}°C</p>         
            </div>
            )}
        </div>
    );
}