import React from "react";

const Input = ({ handleChange, label, name, value }) => {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={(event) => {
          handleChange(name, event.target.value);
        }}
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
