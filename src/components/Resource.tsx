import dayjs, { Dayjs } from "dayjs";
import { getRandomTailwindBgColor } from "../utils/colors";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { Event, EventsContext } from "../contexts/EventsContext";
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
  const { mockEvents } = useContext(EventsContext);
  const handleDoubleClick = (date: Dayjs) => {
    const new_event = prompt("Enter a new event");

    if (new_event !== "" && new_event != null) {
      const newEvent: Event = {
        id: crypto.randomUUID(),
        title: new_event,
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
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, date: Dayjs) => {
    e.preventDefault();
    const eventId = e.dataTransfer.getData("text/plain");

    const updatedEvents = mockEvents.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          date: dayjs(date).format("YYYY-MM-DD"),
          resourceId: resourcesId,
        };
      }
      return event;
    });
    setMockEvents(updatedEvents);
    localStorage.setItem("mock_events", JSON.stringify(updatedEvents));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
          onDrop={(e) => handleDrop(e, date)}
          onDragOver={handleDragOver}
        >
          {events.map(
            (event: Event) =>
              dayjs(date).isSame(event.date) && (
                <EventComponent key={event.id} event={event} />
              )
          )}
        </div>
      ))}
    </>
  );
};

export default Resource;
