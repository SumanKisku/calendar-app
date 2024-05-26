import dayjs, { Dayjs } from "dayjs";
import { generateMonthDays } from "../utils/dates";

const MonthBar = ({ monthIndex }: { monthIndex: number }) => {
  const currentMonthDays = generateMonthDays(monthIndex);

  const colorToday = (
    item: Dayjs,
    today = dayjs(new Date()).format("D ddd YYYY")
  ) => {
    return item.format("D ddd YYYY") === today
      ? "bg-blue-500 text-white rounded-xl"
      : "";
  };

  return (
    <div className="flex">
      <div className="flex flex-nowrap h-10">
        {currentMonthDays.map((item, i) => (
          <div key={i} className="p-1 flex-none border border-solid w-[90px]">
            <div className={`pl-2 pr-4 text-center ${colorToday(item)}`}>
              {item.format("D ddd")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthBar;
