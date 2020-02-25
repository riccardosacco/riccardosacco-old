import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga";

import ScrollToTop from "./routing/ScrollToTop";

import App from "./App";

import "./assets/scss/styles.scss";

// Initialize Google Analytics
ReactGA.initialize("UA-159074991-1");

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById("root")
);
