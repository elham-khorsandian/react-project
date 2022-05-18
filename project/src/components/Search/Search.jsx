import React, { useState } from "react";

const Search = (props) => {
  const { onChange } = props;
  const [beerSearch, setBeerSearch] = useState("");

  const changeHandler = (e) => {
    setBeerSearch(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={beerSearch}
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default Search;
