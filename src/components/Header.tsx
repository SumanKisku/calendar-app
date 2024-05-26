import dayjs from "dayjs";
import { useContext } from "react";
import { CalendarContext } from "../contexts/CalenderContext";
import { getCurrentMonth } from "../utils/dates";

const Header = ({ monthIndex }: { monthIndex: number }) => {
  const month = monthIndex;
  const { setMonthIndex } = useContext(CalendarContext);

  const handlePrevMonth = () => {
    setMonthIndex((prevMonthIndex) => prevMonthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex((prevMonthIndex) => prevMonthIndex + 1);
  };

  const handleResetMonth = () => {
    setMonthIndex(getCurrentMonth());
  };

  return (
    <header className="flex justify-between items-center p-2 fixed h-10 border border-b-0 bg-slate-100 w-screen z-20">
      <h1 className="text-2xl text-blue-500">{`${dayjs()
        .month(month)
        .format("MMM YYYY")}`}</h1>
      <div className="flex justify-center font-bold">
        <button onClick={() => handlePrevMonth()}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </button>
        <button onClick={() => handleResetMonth()}>Today</button>
        <button onClick={() => handleNextMonth()}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
