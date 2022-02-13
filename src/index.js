import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BaseContextProvider } from "./hooks/context";

/*Import CSS Ant Design*/
import "antd/dist/antd.css";
import "./index.css";

/*Import App*/
import App from "./App";

/*End Import*/

const rootElement = document.getElementById("root");

render(
  <BaseContextProvider>
    <Router>
      <App />
    </Router>
  </BaseContextProvider>,
  rootElement
);
