import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d55833efcb740d0668be8fbc92756b75`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <h2>{data.name}</h2>
            {data.sys && <p>Country: {data.sys.country}</p>}
            {data.coord && (
              <p>
                Latitude: {data.coord.lat}, Longitude: {data.coord.lon}
              </p>
            )}
          </div>
          <div className="temp">
            {data.main && <h1>{data.main.temp.toFixed()}°C</h1>}
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].description}</p>}
            {data.weather && (
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            )}
          </div>
        </div>

        {data.name && (
          <>
          <div className="bottom">
            <div className="feels">
              {data.main && (
                <>
                <p className='bold'>
                  {data.main.feels_like.toFixed()}°C
                </p>
                <p>
                Feels Like
              </p>
              </>
              )}
            </div>
            <div className="humidity">
              {data.main && <p className='bold'>{data.main.humidity}%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind && <p className='bold'>{data.wind.speed.toFixed()} MPH</p>}
              <p>Wind Speed</p>
            </div>
          </div>
          <div className='bottom1'>
            <div className="visibility">
              <p className='bold'>{data.visibility} meters</p>
              <p>Visibility</p>
            </div>
            <div className="pressure">
              {data.main && <p className='bold'>{data.main.pressure} hPa</p>}
              <p>Pressure</p>
            </div>
          </div>
          <div className='bottom2'>
          <div className="sun">
              {data.sys && (
                <>
                  <p className='bold'>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                  <p className='sunrise'>Sunrise</p>
                  <p className='bold'>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                  <p className='sunset'>Sunset</p>

                </>
              )}
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;