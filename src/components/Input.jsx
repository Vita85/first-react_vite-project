import React from 'react';

const Input = ({ placeholder, onChange }) => {

  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      onChange={(event) => onChange(event.target.value)} 
    />

  );
};

export default Input;