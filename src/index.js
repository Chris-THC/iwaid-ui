import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

// Import the context provider
import { AppContext } from "./Context/AppContext";

// Import ReactRouter
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>
);
