import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default function App() {
	return (
    <div className="Weather">
      <Weather />
    </div>
	);
  }