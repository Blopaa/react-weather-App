import React from "react";
import moment from "moment";
import Icons from "../icons/Icons";

const WeatherCard = ({ dateP, cityName, data }) => {
  console.log(data);

  const clime = data.weather[0].main;

  const weatherDate = moment(dateP);

  //   console.log(weatherDate);

  return (
    <div className="weather__card-container">
      <div className="weather__card-time-place-container mt-1 mb-1">
        <p>{cityName}</p>
        <p className="weather__card-day">{weatherDate.format("D")}</p>
        <p>
          {weatherDate.format("MMMM")}, {weatherDate.format("YYYY")}
        </p>
      </div>
      <div className="weather__card-Data">
        <ul>
          <li>
            <Icons clime={clime} /> {clime}
          </li>
          <li>media</li>
          <li>temperatura max</li>
          <li>temperatura min</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
