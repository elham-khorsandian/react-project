import React from "react";
import "./Filter.scss";

const Filter = (props) => {
  const { onChange, selected } = props;
  //const
  const filters = ["all", "ABV > 6%", "acidic(PH < 4"];
  const filterOptionsJSX = filters.map((filter) => {
    return <option value={filter}>{filter}</option>;
  });
  const handleFilter = (e) => {
    onChange(e.target.value);
  };
  return (
    <form className="filter-options-form">
      <label htmlFor="filter-options">Select filter: </label>
      <select name="filter-options" onChange={handleFilter} value={selected}>
        {filterOptionsJSX}
      </select>
    </form>
  );
};
export default Filter;
