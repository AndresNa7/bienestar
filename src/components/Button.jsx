<<<<<<< HEAD
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
=======
import React from 'react';

const Button = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
>>>>>>> b52cbc45c6d4ec27a9dfb43c180574e73ebe4a2c
