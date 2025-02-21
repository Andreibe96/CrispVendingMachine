import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import VendingMachine from "./Components/VendingMachine.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VendingMachine />
  </StrictMode>
);
