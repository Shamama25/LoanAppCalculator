/* eslint-disable react/prop-types */

import { useState } from "react";
import { Trash2 } from "lucide-react";

const LoanCalculator = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const [loanAmountValidation, setLoanAmountValidation] = useState("");
  const [interestRateValidation, setInterestRateValidation] = useState("");
  const [loanTermValidation, setLoanTermValidation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      onCalculate({ loanAmount, interestRate, loanTerm });
    }
  };

  const handleClear = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setLoanAmountValidation("");
    setInterestRateValidation("");
    setLoanTermValidation("");
  };
  const validateInputs = () => {
    let isValid = true;

    if (!loanAmount || isNaN(loanAmount) || loanAmount <= 0) {
      setLoanAmountValidation("Please enter a valid loan amount.");
      isValid = false;
    } else {
      setLoanAmountValidation("");
    }

    if (!interestRate || isNaN(interestRate) || interestRate <= 0) {
      setInterestRateValidation("Please enter a valid interest rate.");
      isValid = false;
    } else {
      setInterestRateValidation("");
    }

    if (!loanTerm || isNaN(loanTerm) || loanTerm <= 0) {
      setLoanTermValidation("Please enter a valid loan term.");
      isValid = false;
    } else {
      setLoanTermValidation("");
    }

    return isValid;
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="h-screen w-screen">
        <img
          src="../../public/loan__.jpg"
          style={{ height: "90%" }}
          alt="Loan Image"
        />
      </div>
      <div className="flex justify-center card card-compact h-[80vh] w-96 bg-base-100 shadow-xl max-w-md mx-auto mt-10 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#5e7a35] font-serif">
          Loan Payment Calculator
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#868484] mb-2">Loan Amount</label>
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter Loan Amount"
            />
            {loanAmountValidation && (
              <p className="text-red-500">{loanAmountValidation}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#868484] mb-2">Interest Rate %</label>
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter Interest Rate"
            />
            {interestRateValidation && (
              <p className="text-red-500">{interestRateValidation}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-[#868484] mb-2">
              Loan Term (years)
            </label>
            <input
              className="input input-bordered input-success w-full max-w-xs"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="Enter Loan Term"
            />
            {loanTermValidation && (
              <p className="text-red-500">{loanTermValidation}</p>
            )}
          </div>
          <div className="flex justify-between gap-2 mt-4">
            <button
              className="flex-1 bg-[#78430f] text-white py-2 font-bold rounded hover:bg-[#64380b]"
              type="submit"
            >
              Calculate Loan
            </button>
            <button
              className="flex items-center justify-center bg-[#78430f] text-white py-2 px-4 font-bold rounded hover:bg-[#64380b]"
              onClick={handleClear}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanCalculator;
