import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../contexts/CalenderContext";
import { generateMonthDays } from "../utils/dates";
import dayjs, { Dayjs } from "dayjs";
import Resource from "./Resource";
import { Event, EventsContext } from "../contexts/EventsContext";
import { ResourceContext } from "../contexts/ResourceContext";
import { generateSequence } from "../utils/sequence-generator";

const colorToday = (
  item: Dayjs,
  today = dayjs(new Date()).format("D ddd YYYY")
) => {
  return item.format("D ddd YYYY") === today
    ? "bg-blue-500 text-white rounded-xl"
    : "";
};

const Grid = () => {
  const { resources, setResources } = useContext(ResourceContext);
  const { monthIndex } = useContext(CalendarContext);
  const currentMonthDays = generateMonthDays(monthIndex);
  const [daysInCurrentMonth, setDaysInCurrentMonth] = useState(
    currentMonthDays.length
  );

  const { mockEvents: MOCK_EVENTS, setMockEvents } = useContext(EventsContext);

  const handleAddResource = () => {
    console.log(resources.length);

    const newResourceKey = generateSequence(resources.length + 1);
    setResources([...resources, newResourceKey]);
    localStorage.setItem(
      "resources",
      JSON.stringify([...resources, newResourceKey])
    );
  };

  useEffect(() => {
    setDaysInCurrentMonth(currentMonthDays.length);
  }, [currentMonthDays, daysInCurrentMonth]);

  return (
    <div
      className={`grid grid-cols-${daysInCurrentMonth} grid-rows-1 relative top-10 w-fit`}
    >
      {/* Grid Header start */}
      <div className="w-[190px] sticky left-0 top-10 border bg-white z-20"></div>
      {currentMonthDays.map((item, i) => (
        <div key={i} className="p-1 flex-none border sticky top-10 bg-white">
          <div className={`pl-2 pr-4 text-center ${colorToday(item)}`}>
            {item.format("D ddd")}
          </div>
        </div>
      ))}
      {/* Grid Header end */}

      {/* Grid content start */}
      {resources.map((id, i) => {
        return (
          <Resource
            key={i}
            resourcesId={id}
            currentMonthDays={currentMonthDays}
            events={MOCK_EVENTS.filter(
              (event: Event) => event.resourceId === id
            )}
            setMockEvents={setMockEvents}
          />
        );
      })}
      <button
        className="bg-blue-500 text-white font-semibold p-2 sticky left-0"
        onClick={() => handleAddResource()}
      >
        Add Resource
      </button>
      {/* Grid content end */}
    </div>
  );
};

export default Grid;
