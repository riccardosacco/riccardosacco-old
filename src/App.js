import React from "react";
import { Switch, Route } from "react-router-dom";
import Analytics from "react-router-ga";

import Provider from "./context/Provider";

import Home from "./pages/Home/";
import Portfolio from "./pages/Portfolio/";
import PortfolioSingle from "./pages/Portfolio/PortfolioSingle";

import Resume from "./pages/Resume/";
import Contact from "./pages/Contact/";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/ui/Navbar";

import settings from "./config/settings";

const App = () => (
  <Provider>
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Analytics id="UA-159074991-1">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} title={`Home - ${settings.name}`} />
              )}
            />
            <Route
              exact
              path="/portfolio"
              render={props => (
                <Portfolio {...props} title={`Portfolio - ${settings.name}`} />
              )}
            />
            <Route
              path="/portfolio/:slug"
              render={props => (
                <PortfolioSingle
                  {...props}
                  {...settings}
                  title={`Portfolio - ${settings.name}`}
                />
              )}
            />
            <Route
              path="/resume"
              render={props => (
                <Resume
                  {...props}
                  {...settings}
                  title={`Resume - ${settings.name}`}
                />
              )}
            />
            <Route
              path="/contact"
              render={props => (
                <Contact {...props} title={`Contact - ${settings.name}`} />
              )}
            />
          </Switch>
        </Analytics>
      </div>
    </div>
  </Provider>
);

export default App;
