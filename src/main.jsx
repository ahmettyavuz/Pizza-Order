import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
