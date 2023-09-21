<<<<<<< HEAD
import React from 'react';

const Desplegable = ({ options }) => {
  return (
    <select>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Desplegable;
=======
import React from 'react';

const Desplegable = ({ label, options, placeholder }) => {
  return (
    <select>
      {placeholder && (
        <option disabled value="">
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Desplegable;


>>>>>>> b52cbc45c6d4ec27a9dfb43c180574e73ebe4a2c
