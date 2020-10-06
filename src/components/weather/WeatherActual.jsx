import React from "react";
import moment from "moment";

const weatherActual = ({ data }) => {
  const clime = data && data.weather && console.log(data.weather[0].main);
  const weatherDate = data && data.weather && moment(data.dt_txt);
  return (
    <div className="weather__firstDay-container">
      <div className="weather__firstDayData">
        {data && (
          <p className="weather__card-day">{weatherDate.format("D")}</p>
        )}
      </div>
    </div>
  );
};

export default weatherActual;
