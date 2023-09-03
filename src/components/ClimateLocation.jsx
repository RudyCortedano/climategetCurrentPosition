import axios from "axios";
import React, { useEffect, useState } from "react";
import CardWeather from "./CardWeather";

const ClimateLocation = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(obj);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if(coords){
      const apikey =`047521180f9a9c059af0f18a9afe0bcb`
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}`)
      .then((res) => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit: ((res.data.main.temp -273.15) * 9/5 +32.).toFixed(1),
        }
        setTemp(obj);
  });
}
  }, [coords]);

  console.log(weather);

  return (
<div className="card__weather">
  <CardWeather weather={weather} temp={temp}/>
</div>
  );
};

export default ClimateLocation;
