import React from "react";
import { useContext } from "react";
import useInput from "../../hooks/useInput";
import { CityContext } from "./CityContext";
import Swal from 'sweetalert2';

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
    Swal.fire('Saved', city + ' has been searched', 'success');
  };

  return (
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
  );
};

export default SearchInput;
