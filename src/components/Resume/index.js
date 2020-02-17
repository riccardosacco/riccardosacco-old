import React from "react";

import Heading from "./Heading";
import Works from "./Works";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Interests from "./Interests";
import Projects from "./Projects";
import Social from "../../components/ui/Social";

const Resume = ({ resume, social }) => (
  <div id="resume" className="resume-document">
    <Heading {...resume} />
    <div className="resume-main">
      <section>
        <Works {...resume} />
        <Projects {...resume} />
      </section>
      <section>
        <Skills {...resume.skills} />
        <Education {...resume.education} />
        <Languages {...resume.languages} />
        <Interests {...resume.interests} />
      </section>
    </div>
    <Social social={social} center />
  </div>
);

export default Resume;
