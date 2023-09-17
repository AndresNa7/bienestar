import React from 'react';

const Desplegable = ({ label, options }) => {
  return (
    <div>
      <label>
        {}
      </label>
      <select className="desplegable-select">
        <option disabled selected value="">
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Desplegable;

