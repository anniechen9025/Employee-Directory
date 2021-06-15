import React from "react";
import "./style.css";

function Name(props) {
  return (
    <div>
      <th scope="col" style={{width: 20 + "%"}} type = "sort" onClick={props.sortEmployees()}>Name</th>
    </div>
  );
}

export default Name;
