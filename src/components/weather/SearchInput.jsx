import React from "react";
import { useContext } from "react";
import useInput from "../../hooks/useInput";
import { CityContext } from "./CityContext";

const SearchInput = () => {
  const { setCity } = useContext(CityContext);

  const [values, handleChange, reset] = useInput({
    city: "",
  });

  const { city } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length <= 0) {
      return;
    }

    setCity(city);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={city}
        name="city"
        autoComplete="off"
        className="input__default"
      />
    </form>
    </div>
  );
};

export default SearchInput;
