import React from "react";
import SearchInput from "../weather/SearchInput";
import {ReactComponent as Search} from "../../assets/icons/search.svg"

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Search/>
      <SearchInput />
    </div>
  );
};

export default Navbar;
