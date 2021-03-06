import React from "react";
import moment from "moment";
import { useContext } from "react";

import Icons from "../icons/Icons";
import { WeatherContext } from "../context/WeatherContext";

const WeatherActual = ({ data }) => {
  const { city } = useContext(WeatherContext);
  const clime = data && data.weather && data.weather[0].main;
  const weatherDate = data && data.weather && moment(data.dt_txt);

  return (
    <div className="weather__firstDay-container">
      <div className="weather__firstDay-scontainer">
        <div className="weather__firstDayData">
          <div>
            {data && (
              <>
                <p className="actualP" style={{ fontSize: "50px" }}>
                  {city}, in a while
                </p>
                <p className="weather__card-Actualday">
                  {weatherDate.format("D")}
                </p>
                <p className="actualP">
                  {weatherDate.format("MMMM")}, {weatherDate.format("YYYY")}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="weather__actualUl">
          <ul>
            <li>
              <div style={{ display: "flex" }}>
                <Icons size="50px" clime={clime} /> {clime}
              </div>
            </li>
            {data && (
              <>
                <li>{data.main.temp} ºC</li>
                <li>pressure: {data.main.pressure} Pa</li>
                <li>humidity: {data.main.humidity} %</li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="weather__firstDay-moreData">
        <div className="weather__firstDay-windContainewr">
          <p className="weather__firstDay-p mt-5">wind: </p>
          {data && (
            <ul>
              <li>deg: {data.wind.deg}</li>
              <li>speed: {data.wind.speed}</li>
            </ul>
          )}
        </div>
        <div className="weather__firstDay-temperatureContainewr">
          <p className="weather__firstDay-p mt-5">temperature:</p>
          {data && (
            <ul>
              <li>max temp: {data.main.temp_max}</li>
              <li>min temp: {data.main.temp_min}</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherActual;
