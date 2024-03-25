import React, { useState } from "react";
import Input from "./Input";

const UserInput = ({ handleChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          handleChange={handleChange}
          value={userInput.initialInvestment}
          label="Initial Investment"
          name="initialInvestment"
        />
        <Input
          handleChange={handleChange}
          value={userInput.annualInvestment}
          label="Annual Investment"
          name="annualInvestment"
        />
      </div>
      <div className="input-group">
        <Input
          handleChange={handleChange}
          value={userInput.expectedReturn}
          label="Expected Return"
          name="expectedReturn"
        />
        <Input
          handleChange={handleChange}
          value={userInput.duration}
          label="Duration"
          name="duration"
        />
      </div>
    </section>
  );
};

export default UserInput;
