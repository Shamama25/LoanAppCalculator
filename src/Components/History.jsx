/* eslint-disable react/prop-types */

import { Trash2 } from "lucide-react";

const History = ({ history, onClear }) => {

  const handleClear = () => {
    onClear();
  }

  return (
    <div className="history-container p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#5e7a35] border-b border-gray-300 font-serif">
          Calculation History
        </h2>
        <button
          className="flex items-center justify-center bg-[#78430f] text-white py-2 px-4 font-bold rounded hover:bg-[#64380b]"
          onClick={handleClear}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="mb-6 pb-4 border-b border-gray-300">
            <p className="mb-2 pl-2 block text-[#868484]">
              <strong>Loan Amount:</strong> ${item.loanAmount}
            </p>
            <p className="mb-2 pl-2 block text-[#868484]">
              <strong>Interest Rate:</strong> {item.interestRate}%
            </p>
            <p className="mb-2 pl-2 block text-[#868484]">
              <strong>Loan Term:</strong> {item.loanTerm} years
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
