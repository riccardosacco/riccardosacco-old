import React, { useEffect } from "react";

import AboutMe from "./AboutMe";
import Overview from "./Overview";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import Copyright from "./Copyright";

const Home = props => {
  //Change document title
  useEffect(() => {
    document.title = props.title;
  });

  return (
    <>
      <AboutMe />
      <Overview />
      <Portfolio />
      <Resume />
      <Contact />
      <Copyright />
    </>
  );
};

export default Home;
