import React from "react";

const Inputs = () => {
  const handleChange = () => {
    console.log("handleChange");
  };

  return (
    <div>
      <div>
        <input data-testid="element" type="checkbox" />
        <input data-testid="element" type="radio" />
        <input data-testid="element" type="number" />
      </div>
      <select>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
      <input
        type="checkbox"
        data-testid="simple-checkbox"
        onChange={handleChange}
      />
      <input type="text" data-testid="simple-input" />
    </div>
  );
};

export default Inputs;
