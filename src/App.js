import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/ui/Navbar";

import settings from "./config/settings";

export default () => (
  <>
    <Sidebar {...settings} />
    <div className="content">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} {...settings} />}
        />
      </Switch>
    </div>
  </>
);
