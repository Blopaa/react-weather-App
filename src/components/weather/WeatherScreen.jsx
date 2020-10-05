import React, { useCallback, useLayoutEffect } from "react";
import { useState } from "react";
import getDataEvery24h from "../../helpers/getDataEvery24h";
import useFetch from "../../hooks/useFetch";
import SearchInput from "./SearchInput";
import WeatherCard from "./WeatherCard";

const WeatherScreen = () => {
  const [newdata, setData] = useState([]);
  const [state, setState] = useState("new york");
  const { data, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${state}&units=metric&appid=${process.env.REACT_APP_WEATHER_TOKEN}`
  );

  const dataop = useCallback(() => {
    return !loading && getDataEvery24h(data);
  }, [data, loading]);

  useLayoutEffect(() => {
    const weatherData = dataop();
    setData(weatherData);
    console.log(data);
  }, [dataop]);

  const handleSearch = (city) => {
    setState(city);
  };

  return (
    <div>
      <SearchInput handleSearch={handleSearch} />
      {newdata && newdata.map((d) => (
          <WeatherCard key={d.dt}/>
      ))}
    </div>
  );
};

export default WeatherScreen;
