import React, { useEffect } from "react";

import AboutMe from "./AboutMe";
import Overview from "./Overview";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Home = props => {
  //Change document title
  useEffect(() => {
    document.title = props.title;
  });

  return (
    <>
      <AboutMe {...props} />
      <Overview {...props} />
      <Portfolio {...props} />
      <Resume {...props} />
    </>
  );
};

export default Home;
