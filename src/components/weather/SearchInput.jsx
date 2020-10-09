import React from "react";
import { useContext } from "react";
import useInput from "../../hooks/useInput";
import { WeatherContext } from "../context/WeatherContext";

const SearchInput = () => {
  const { setCity, setLoading } = useContext(WeatherContext);

  const [values, handleChange, reset] = useInput({
    city: "",
  });

  const { city } = values;

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    if (city.length <= 0) {
      return;
    }

    localStorage.setItem('city', city)

    setTimeout(() => {
      setCity(city);
      setLoading(false)
    }, 500)
    reset();
  };

  return (
    <div>
      <form className="form__default" onSubmit={handleSubmit}>
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
