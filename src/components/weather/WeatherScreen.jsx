import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import getDataEvery24h from "../../helpers/getDays";
import useFetch from "../../hooks/useFetch";
import Navbar from "../header/Navbar";
import { CityContext } from "./CityContext";
import WeatherActual from "./WeatherActual";
import WeatherCard from "./WeatherCard";

const WeatherScreen = () => {
  const { city } = useContext(CityContext);
  const [newdata, setData] = useState([]);
  const { data, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_TOKEN}`
  );

  const dataop = useCallback(() => {
    return !loading && getDataEvery24h(data);
  }, [data, loading]);

  useEffect(() => {
    const weatherData = dataop();
    setData(weatherData);
  }, [dataop]);

  return (
    <div>
      <Navbar/>
      <div>
        {newdata && <WeatherActual data={newdata[0]} />}
        <div className="weather__cards-container">
          {newdata &&
            newdata.slice(1, 5).map((d) => {
              return (
                <WeatherCard
                  key={d.dt}
                  dateP={d.dt_txt}
                  cityName={city}
                  data={d}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
