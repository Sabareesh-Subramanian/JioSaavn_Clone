import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { OtpValidation } from "./contexts/OtpContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <OtpValidation>
        <App />
      </OtpValidation>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
