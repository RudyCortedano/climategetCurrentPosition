import React, { useState } from 'react';

const CardWeather = ({weather, temp}) => {
  const [isCelsius, setisCelsius] = useState(true)
  const handleChangeTemp = () =>{
    setisCelsius(!isCelsius)
  }
 return (
  <article className="card__climate">
    <h1>Weather App</h1>
    <h3>{weather?.name} - {weather?.sys.country}</h3>
    <div className="iconInfo">
      <div className="icon__climate">
        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
      </div>
      <ul className="card__list">
        <li className="card__item"><strong>Wind Speed: </strong>{weather?.wind.speed} m/s</li>
        <li className="card__item"><strong>Clouds: </strong>{weather?.clouds.all} %</li>
        <li className="card__item"><strong>Pressure: </strong>{weather?.main.pressure} hPa</li>
      </ul>
    </div>
    <h3 className="card__temp">{isCelsius ? `${temp?.celsius} °C`: `${temp?.farenheit} °F` } </h3>
    <div className="buttonPosition">
      <button className='card__btn' onClick={handleChangeTemp}>
        {isCelsius ? `Change to °F` : `Change to °C`}
      </button>
    </div>   
  </article>
 );
};

export default CardWeather;