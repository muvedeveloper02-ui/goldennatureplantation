import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CurrencyProvider } from "./context/CurrencyContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/goldennatureplantation">
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </BrowserRouter>
);
