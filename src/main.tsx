import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CalenderContextProvider } from "./contexts/CalenderContext.tsx";
import EventsContextProvider from "./contexts/EventsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalenderContextProvider>
      <EventsContextProvider>
        <App />
      </EventsContextProvider>
    </CalenderContextProvider>
  </React.StrictMode>
);
