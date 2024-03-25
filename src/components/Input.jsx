import React from "react";

const Input = ({ handleChange, label, name, value }) => {
  const handleInputChange = (event) => {
    handleChange(name, event.target.value);
  };

  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleInputChange}
        type="number"
        value={value}
        name={name}
        id={name}
        required
      />
    </p>
  );
};

export default Input;
