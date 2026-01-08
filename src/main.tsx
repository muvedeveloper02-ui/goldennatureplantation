import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CurrencyProvider } from "./context/CurrencyContext";
import ScrollToTop from "./components/layout/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
     <ScrollToTop/>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </HashRouter>
);
