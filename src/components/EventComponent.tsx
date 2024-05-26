import { useContext } from "react";
import { Event, EventsContext } from "../contexts/EventsContext";

const EventComponent = ({ event }: { event: Event }) => {
  const { mockEvents, setMockEvents } = useContext(EventsContext);
  const handleDelete = (eventId: string) => {
    const event = mockEvents.find((e) => e.id === eventId);
    if (
      event &&
      window.confirm(
        `Are you sure you want to delete the event "${event.title}"?`
      )
    ) {
      const updatedEvents = mockEvents.filter((event) => event.id !== eventId);
      setMockEvents(updatedEvents);
      localStorage.setItem("mock_events", JSON.stringify(updatedEvents));
    }
  };

  return (
    <div
      onClick={() => handleDelete(event.id)}
      className={`${event.bgColor} rounded pl-1 text-white`}
      data-id={event.id}
    >
      {event.title}
    </div>
  );
};

export default EventComponent;
