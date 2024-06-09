/* eslint-disable react/prop-types */

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Printer } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ loanData }) => {
  const { loanAmount, interestRate, loanTerm } = loanData;
  const P = loanAmount;
  const r = interestRate / 12 / 100;
  const n = loanTerm * 12;

  const monthlyPayment = (
    (P * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1)
  ).toFixed(2);

  const totalPayment = (monthlyPayment * n).toFixed(2);
  const totalInterest = (totalPayment - P).toFixed(2);

  const chartData = {
    labels: ["Loan Amount", "Total Interest", "Total Payment"],
    datasets: [
      {
        data: [P, totalInterest, totalPayment],
        backgroundColor: ["#7D0A0A", "#F79327", "#5e7a10"],
        hoverBackgroundColor: ["#6B0808", "#d6791f", "#6c841a"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          gap: 20,
        },
      },
    },
    layout: {
      padding: {
        top: 50,
      },
    },
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center m-auto card card-compact h-[80vh] w-96 bg-base-100 shadow-xl max-w-md mx-auto p-6 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#5e7a35] font-serif mt-2">
          Loan Calculation Result
        </h2>
        <div className="mb-4">
          <p className="mb-2 pl-2 block text-[#868484]">
            <strong>Loan Amount: </strong> ${loanAmount}
          </p>
          <p className="mb-2 pl-2 block text-[#868484]">
            <strong>Interest Rate: </strong> ${interestRate}
          </p>
          <p className="mb-2 pl-2 block text-[#868484]">
            <strong>Loan Term: </strong> {loanTerm} years
          </p>
          <p className="mb-2 pl-2 block text-[#868484]">
            <strong>Monthly Payment: </strong> ${monthlyPayment}
          </p>
          <p className="mb-2 pl-2 block text-[#868484]">
            <strong>Total Payment:</strong> ${totalPayment}
          </p>
          <p className="mb-2 pl-2 block text-[#868484]">
            <strong>Total Interest: </strong> ${totalInterest}
          </p>
        </div>
        <div className="flex justify-between gap-2 mt-4">
          <button
            className="flex-1 bg-[#78430f] text-white py-2 font-bold rounded hover:bg-[#64380b]"
            type="submit"
            onClick={() => window.location.reload()}
          >
            Back to Calculator
          </button>
          <button
            className="flex items-center justify-center bg-[#78430f] text-white py-2 px-4 font-bold rounded hover:bg-[#64380b]"
            onClick={handlePrint}
          >
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-[60vh]">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Result;
