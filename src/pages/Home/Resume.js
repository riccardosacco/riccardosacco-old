import React, { useContext } from "react";

import Context from "../../context";

import Button from "../../components/ui/Button";

import ResumeItem from "../../components/Resume";

const Resume = () => {
  const { settings } = useContext(Context);

  return (
    <section className="resume home">
      <div className="container">
        <h2>{settings.resume.title}</h2>
        <p></p>
        <ResumeItem {...settings} />
        <div className="resume-button">
          <Button
            // href="/resume"
            text="Download Resume"
            icon="fa fa-file-alt"
            onClick={window.print}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
