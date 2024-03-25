import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  };

  const inputIsValid = userInput.duration > 0;
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <ResultTable userInput={userInput} />
      ) : (
        <p className="center">Please Enter a valid Duration!</p>
      )}
    </>
  );
}

export default App;
