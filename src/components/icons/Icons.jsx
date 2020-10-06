import React from "react";
import { ReactComponent as Clear } from "../../assets/icons/clear.svg";
import { ReactComponent as Cloudy } from "../../assets/icons/cloudy.svg";
import { ReactComponent as Rain } from "../../assets/icons/rain.svg";

const Icons = ({ clime }) => {
  let weatherIcon = (c) => {
    switch (c) {
      case "Rain":
        return <Rain />;
      case "Clouds":
        return <Cloudy />;
      default:
        return <Clear />;
    }
  };
  return <div className="icon__container">{weatherIcon(clime)}</div>;
};

export default Icons;
