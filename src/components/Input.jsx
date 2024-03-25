import React from "react";

const Input = ({ className, label }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type="number" name={label} id={label} />
    </>
  );
};

export default Input;
