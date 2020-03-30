import React from 'react';

import './input.styles.sass';

const Input = ({type, label, name, id, handleChange, placeholder} ) => (
  <div className="input-group">
    { label ? 
      <label 
        htmlFor={id} 
        className="input-group__label">{label}</label> 
      : null
    }
    <input 
      onChange={handleChange} 
      type={type} 
      name={name} 
      id={id} 
      placeholder={placeholder}
      className="input-group__input"
    />
  </div>
);

export default Input;