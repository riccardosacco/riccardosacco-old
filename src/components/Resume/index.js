import React from "react";

import Heading from "./Heading";
import Works from "./Works";
import Skills from "./Skills";
import Education from "./Education";
import Languages from "./Languages";

const Resume = resume => (
  <div className="resume-document">
    <Heading {...resume} />
    <div className="resume-main">
      <section>
        <Works {...resume} />
      </section>
      <section>
        <Skills {...resume.skills} />
        <Education {...resume.education} />
        <Languages {...resume.languages} />
      </section>
    </div>
  </div>
);

export default Resume;
