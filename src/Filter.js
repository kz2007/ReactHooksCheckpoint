
import { useState, useEffect, useRef } from "react";
function Filter({SetFilter}) {
  
  return (
    <div className="Filter">
      <h2>
        Filter:{" "}
        <select name="Filter" onChange={(e) => {SetFilter(e.target.options.selectedIndex)}}>
          <option value="AZ">By name from A to Z</option>
          <option value="ZA">By name from Z to A</option>
          <option value="LH">By rating from lowest to highest</option>
          <option value="HL">By rating from highest to lowest</option>
        </select>
      </h2>
    </div>
  );
}

export default Filter;
