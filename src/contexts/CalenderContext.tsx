import { Dispatch, SetStateAction, createContext, useState } from "react";
import { getCurrentMonth } from "../utils/dates";

interface CalendarContextType {
  monthIndex: number;
  setMonthIndex: Dispatch<SetStateAction<number>>;
}

export const CalendarContext = createContext<CalendarContextType>({
  monthIndex: getCurrentMonth(),
  setMonthIndex: () => {},
});

export const CalenderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [monthIndex, setMonthIndex] = useState(getCurrentMonth());

  return (
    <CalendarContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </CalendarContext.Provider>
  );
};
