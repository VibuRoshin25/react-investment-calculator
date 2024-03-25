import React from "react";
import ResultRow from "./ResultRow";
import { calculateInvestmentResults } from "../util/investment";

const ResultTable = ({ userInput }) => {
  const investmentResults = calculateInvestmentResults(userInput);
  const initialInvestment =
    investmentResults[0].valueEndOfYear -
    investmentResults[0].interest -
    investmentResults[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => (
          <ResultRow
            key={result.year}
            initialInvestment={initialInvestment}
            result={result}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
