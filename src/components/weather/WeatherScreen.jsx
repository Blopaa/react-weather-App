import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import getDataEvery24h from "../../helpers/getDataEvery24h";
import getDataFirstDay from "../../helpers/getDataFirstDay";
import useFetch from "../../hooks/useFetch";
import Navbar from "../header/Navbar";
import { CityContext } from "./CityContext";
import WeatherCard from "./WeatherCard";
import WeatherFirstDay from "./WeatherFirstDay";

const WeatherScreen = () => {
  const {city} = useContext(CityContext)
  const [FirstDay, setFirstDay] = useState({});
  const [newdata, setData] = useState([]);
  const { data, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_TOKEN}`
  );

  const dataop = useCallback(() => {
    return !loading && getDataEvery24h(data);
  }, [data, loading]);

  const firstDay = useCallback(() => {
    return !loading && getDataFirstDay(data);
  }, [data, loading]);

  useEffect(() => {
    const weatherData = dataop();
    setData(weatherData);
  }, [dataop]);

  useEffect(() => {
    const firstDaydata = firstDay();
    setFirstDay(firstDaydata);
  }, [firstDay])

  return (
    <div>
      <Navbar/>
      <WeatherFirstDay day={FirstDay}/>
      <div className="weather__cards-container">
        {newdata &&
          newdata.map((d) => {
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
  );
};

export default WeatherScreen;
