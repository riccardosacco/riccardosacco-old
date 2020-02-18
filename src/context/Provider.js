import React, { Component } from "react";

import Context from "./index";

import settings from "../config/settings";

class Provider extends Component {
  state = {
    settings
  };

  render() {
    return (
      <Context.Provider
        value={{
          settings: this.state.settings
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
