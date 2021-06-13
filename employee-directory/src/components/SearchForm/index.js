import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Search(props) {
  return (
      <div className="form-group">
        <label >Search Name:</label>
        <input
        type = "search"
        onChange={event => props.getFilterEmployees(event)}
        />
      </div>
  );
}

export default Search;
