import React from "react";

import Heading from "./Heading";
import Works from "./Works";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";
import Interests from "./Interests";
import Projects from "./Projects";

const Resume = resume => (
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
  </div>
);

export default Resume;
