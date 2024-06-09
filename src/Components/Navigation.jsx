/* eslint-disable react/prop-types */

const Navigation = ({ currentView, onViewChange }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="pl-8 text-2xl text-[#78430f] font-bold italic cursor-pointer"
          onClick={() => onViewChange("calculator")}
        >
          LoanCal.
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold text-[#5e7a35]">
          <li>
            {currentView === "history" ? (
              <a onClick={() => onViewChange("calculator")}>Calculator</a>
            ) : (
              <a onClick={() => onViewChange("history")}>History</a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
