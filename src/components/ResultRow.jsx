import React from "react";

const ResultRow = ({ result }) => {
  return (
    <tr>
      <td>{result.year}</td>
      <td>{result.valueEndOfYear}</td>
      <td>{result.interest}</td>
      <td>{result.annualInvestment}</td>
      <td>{result.valueEndOfYear - result.interest}</td>
    </tr>
  );
};

export default ResultRow;
