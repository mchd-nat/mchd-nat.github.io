import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="background">
      <div className="content graph_effect">
        <App />
      </div>
    </div>
  </StrictMode>
);
