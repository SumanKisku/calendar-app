import dayjs, { Dayjs } from "dayjs";
import { getRandomTailwindBgColor } from "../utils/colors";
import { Dispatch, SetStateAction } from "react";
import { Event } from "../contexts/EventsContext";
import EventComponent from "./EventComponent";

const Resource = ({
  resourcesId,
  currentMonthDays,
  events,
  setMockEvents,
}: {
  resourcesId: string;
  currentMonthDays: Dayjs[];
  events: Event[];
  setMockEvents: Dispatch<SetStateAction<Event[]>>;
}) => {
  const handleDoubleClick = (
    
    date: Dayjs
  ) => {
    const newEvent: Event = {
      id: crypto.randomUUID(),
      title: "New Event",
      date: dayjs(date).format("YYYY-MM-DD"),
      bgColor: getRandomTailwindBgColor(),
      resourceId: resourcesId,
    };
    setMockEvents((prev) => [...prev, newEvent]);
    const currentEventsState = JSON.parse(
      localStorage.getItem("mock_events") || "[]"
    );
    localStorage.setItem(
      "mock_events",
      JSON.stringify([...currentEventsState, newEvent])
    );
  };

  return (
    <>
      <div className="w-[190px] sticky left-0 bg-white border z-10 min-h-[62px] font-semibold">
        Resources {resourcesId}
      </div>
      {currentMonthDays.map((date, i) => (
        <div
          key={i}
          className="p-1 pb-4 flex flex-col gap-1 border border-solid"
          onDoubleClick={() => handleDoubleClick(date)}
        >
          {events.map(
            (event: Event) =>
              dayjs(date).isSame(event.date) && (
                <EventComponent key={event.id} event={event} />
                // <div
                //   key={i}
                //   className={`${event.bgColor} rounded pl-1 text-white`}
                //   data-id={event.id}
                // >
                //   {event.title}
                // </div>
              )
          )}
        </div>
      ))}
    </>
  );
};

export default Resource;
