import React from "react";

import AboutMe from "./AboutMe"
import Overview from "./Overview"


const Home = (props) => (
  <>
    <AboutMe {...props} />
    <hr />
    <Overview {...props}/>
  </>
);

export default Home;
