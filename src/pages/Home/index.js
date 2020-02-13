import React from "react";

import AboutMe from "./AboutMe";
import Overview from "./Overview";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Home = props => (
  <>
    <AboutMe {...props} />
    <Overview {...props} />
    <Portfolio {...props} />
    <Resume {...props} />
  </>
);

export default Home;
