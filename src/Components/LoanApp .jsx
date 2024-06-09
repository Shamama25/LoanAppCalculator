import { useState, useEffect } from "react";
import LoanCalculator from "./LoanCalculator";
import Result from "./Result";
import Navigation from "./Navigation";
import History from "./History";

const LoanApp = () => {
  const [loanData, setLoanData] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentView, setCurrentView] = useState("calculator");

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("loanHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const handleCalculation = (data) => {
    setLoanData(data);
    const updatedHistory = [...history, data];
    setHistory(updatedHistory);
    localStorage.setItem("loanHistory", JSON.stringify(updatedHistory));
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleClear = () => {
    setHistory([]);
  };
  
  return (
    <div className="App">
      <Navigation currentView={currentView} onViewChange={handleViewChange} />
      {currentView === "calculator" && !loanData && (
        <LoanCalculator onCalculate={handleCalculation} />
      )}
      {currentView === "calculator" && loanData && <Result loanData={loanData} />}
      {currentView === "history" && <History history={history} onClear={handleClear} />}
    </div>
  );
};

export default LoanApp;
