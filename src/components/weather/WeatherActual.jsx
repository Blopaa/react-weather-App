import React from "react";
import moment from "moment";
import { useContext } from "react";
import { CityContext } from "./CityContext";
import Icons from "../icons/Icons";

const WeatherActual = ({ data }) => {
  const { city } = useContext(CityContext);
  const clime = data && data.weather && data.weather[0].main;
  const weatherDate = data && data.weather && moment(data.dt_txt);
  return (
    <div className="weather__firstDay-container">
      <div className="weather__firstDayData">
        <p className="actualP" style={{ fontSize: "50px" }}>
          {city}
        </p>
        <div>
          {data && (
            <>
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
            <div style={{display: 'flex'}}><Icons size="50px" clime={clime} /> {clime}</div>
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
  );
};

export default WeatherActual;
