import Header from "./components/Header";
import { useContext } from "react";
import { CalendarContext } from "./contexts/CalenderContext";
import Grid from "./components/Grid";

function App() {
  const { monthIndex } = useContext(CalendarContext);
  return (
    <div>
      <Header monthIndex={monthIndex} />
      <Grid />
    </div>
  );
}

export default App;
