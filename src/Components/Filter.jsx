import React, { useState } from "react";
import "../index.css";

const Filter = ({ handleFilter }) => {

  //State to manage filter values
  const [filterValue, setFilterValue] = useState("all");

  //Function to set filter value
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setFilterValue(selectedValue);
    handleFilter(selectedValue);
  };

  return (
    <>
      <div className="row">
        <div className="col d-flex justify-content-around mt-5 mb-5">
          <h2>My Todos</h2>
          <select name="filter" id="filter" value={filterValue} onChange={handleChange}>
            <option value="all" className="all">
              All
            </option>
            <option value="completed" className="completed">
              Completed
            </option>
            <option value="notcompleted" className="notcompleted">
              Not Completed
            </option>
          </select>
        </div>
        <hr className="divider"/>
      </div>
    </>
  );
};

export default Filter;


