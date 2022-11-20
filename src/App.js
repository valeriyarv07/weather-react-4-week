import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather</h1>
    <div className="Weather">
      <Weather />
      <footer>
				This project was coded by{" "}
				<a
					href="https://marvelous-crostata-b8703b.netlify.app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Valeriia Rybakova
				</a>{" "}
				and is {""}
				<a
					href="https://github.com/valeriyarv07/weather-react-4-week"
					target="_blank"
					rel="noopener noreferrer"
				>
					open sourced on GitHub.
				</a>
			</footer>
    </div>
  </StrictMode>
);
