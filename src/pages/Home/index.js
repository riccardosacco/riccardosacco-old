import React from "react";

import AboutMe from "./AboutMe";
import Overview from "./Overview";
import Portfolio from "./Portfolio";

const Home = props => (
  <>
    <AboutMe {...props} />
    <Overview {...props} />
    <Portfolio {...props} />
  </>
);

export default Home;
