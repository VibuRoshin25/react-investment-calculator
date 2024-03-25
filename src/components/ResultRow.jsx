import React from "react";
import { formatter } from "../util/investment";

const ResultRow = ({ result, initialInvestment }) => {
  const totalInterest =
    result.valueEndOfYear -
    initialInvestment -
    result.annualInvestment * result.year;
  const totalInvestedCapital = result.valueEndOfYear - totalInterest;
  return (
    <tr>
      <td>{result.year}</td>
      <td>{formatter.format(result.valueEndOfYear)}</td>
      <td>{formatter.format(result.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalInvestedCapital)}</td>
    </tr>
  );
};

export default ResultRow;
