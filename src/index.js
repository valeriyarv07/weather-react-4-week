import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClipLoader from "react-spinners/ClipLoader";
import "./styles.css";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather</h1>
    <div className="Weather">
      <Weather />
      <ClipLoader
        color="blue"
        loading="boolean"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

  </StrictMode>
);