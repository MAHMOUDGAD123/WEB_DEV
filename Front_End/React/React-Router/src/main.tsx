import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { ErrorBoundary } from "react-error-boundary";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ErrorBoundary fallback={<h2 style={{ color: "red" }}>Error ❌</h2>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
