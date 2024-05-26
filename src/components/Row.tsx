import dayjs from "dayjs";
import { useContext } from "react";
import { CalendarContext } from "../contexts/CalenderContext";
import { getCurrentYear } from "../utils/dates";

const Row = () => {
  const { monthIndex } = useContext(CalendarContext);
  const currentYear = getCurrentYear();

  const daysInCurrentMonth = dayjs(
    `${currentYear}-${monthIndex + 1}`
  ).daysInMonth();

  const arr = Array(daysInCurrentMonth).fill(null);

  const colsCount = (cols: number) => {
    if (cols === 28) {
      return "grid-cols-28";
    } else if (cols === 29) {
      return "grid-cols-29";
    } else if (cols === 30) {
      return "grid-cols-30";
    } else {
      return "grid-cols-31";
    }
  };

  return (
    <div
      className={`grid grid-flow-col ${colsCount(
        daysInCurrentMonth
      )}  grid-rows-1`}
    >
      {arr.map((item, i) => (
        <div key={i} className="border w-[90px] h-[90px]">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Row;
