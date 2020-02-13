import React from "react";

import Button from "../../components/ui/Button";

import Resume from "../../components/Resume";

export default () => (
  <section className="resume home">
    <div className="container">
      <h2>My resume</h2>
      <p></p>
      <Resume />
      <div className="resume-button">
        <Button href="/resume" text="Download Resume" icon="fa fa-file-alt" />
      </div>
    </div>
  </section>
);
