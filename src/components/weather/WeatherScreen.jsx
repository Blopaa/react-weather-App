import React, { useCallback, useContext, useEffect } from "react";
import { useState } from "react";
import getDataEvery24h from "../../helpers/getDays";
import useFetch from "../../hooks/useFetch";
import { WeatherContext } from "../context/WeatherContext";
import Navbar from "../header/Navbar";
import Loading from "../loading/Loading";
import Nothing from "../nothing/Nothing";
import WeatherActual from "./WeatherActual";
import WeatherCard from "./WeatherCard";

const WeatherScreen = () => {
  const { city, loading } = useContext(WeatherContext);
  const [newdata, setData] = useState([]);
  const { data } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_TOKEN}`
  );

  const dataop = useCallback(() => {
    return data.cod === "200" && getDataEvery24h(data);
  }, [data]);

  useEffect(() => {
    const weatherData = dataop();
    setData(weatherData);
  }, [dataop]);

  return (
    <div>
      <Navbar />
      {loading ? <Loading/> : data.cod === "404" ? (
        <Nothing />
      ) : (
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
      )}
    </div>
  );
};

export default WeatherScreen;
