import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface Event {
  id: string;
  title: string;
  date: string;
  resourceId: string;
  bgColor: string;
}

const MOCK_EVENTS = [
  {
    id: "1",
    title: "Doctor",
    date: "2024-05-01",
    resourceId: "A",
    bgColor: "bg-red-500",
  },
  {
    id: "2",
    title: "Car wash",
    date: "2024-05-03",
    resourceId: "C",
    bgColor: "bg-green-500",
  },
  {
    id: "3",
    title: "Walk Dog",
    date: "2024-05-03",
    resourceId: "C",
    bgColor: "bg-teal-500",
  },
  {
    id: "4",
    title: "Walk Dog",
    date: "2024-05-03",
    resourceId: "C",
    bgColor: "bg-teal-500",
  },
];

const EVENTS_STORAGE_KEY = "mock_events";

let initialState: Event[];

const storedEvents = localStorage.getItem(EVENTS_STORAGE_KEY);
if (storedEvents) {
  initialState = JSON.parse(storedEvents);
} else {
  initialState = MOCK_EVENTS;
  localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(MOCK_EVENTS));
}

interface EventsContextType {
  mockEvents: Event[];
  setMockEvents: Dispatch<SetStateAction<Event[]>>;
}

export const EventsContext = createContext<EventsContextType>({
  mockEvents: initialState,
  setMockEvents: () => {},
});

const EventsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mockEvents, setMockEvents] = useState(initialState);
  return (
    <EventsContext.Provider value={{ mockEvents, setMockEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContextProvider;
