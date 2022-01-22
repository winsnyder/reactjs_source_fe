import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import CSS Ant Design
import "antd/dist/antd.css";

// Import Context
import { BaseContextProvider } from "./hooks/baseContext";

const rootElement = document.getElementById("root");

render(
  <BaseContextProvider>
    <Router>
      <App />
    </Router>
  </BaseContextProvider>,
  rootElement
);
