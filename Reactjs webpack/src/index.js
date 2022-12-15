import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./App.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
