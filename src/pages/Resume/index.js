import React, { useEffect, useContext } from "react";

import Context from "../../context";

import ResumeItem from "../../components/Resume";

const Resume = ({ title }) => {
  //Change document title
  useEffect(() => {
    document.title = title;
  });

  const { settings } = useContext(Context);

  return (
    <div className="resume page">
      <div className="container">
        <h2>{settings.resume.title}</h2>
        <ResumeItem {...settings} />
      </div>
    </div>
  );
};

export default Resume;
