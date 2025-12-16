import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CurrencyProvider } from "./context/CurrencyContext";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </HashRouter>
);
