import React from "react";
import Button from "../../components/ui/Button";

export default ({ name, job, description }) => (
  <section className="about-me home">
    <div className="container">
      <h2 className="name">{name}</h2>
      <div className="tagline">{job}</div>
      <div className="description">
        {description.map(text => (
          <>
            {text}
            <br />
          </>
        ))}
      </div>
      <Button text="Portfolio" icon="fa fa-arrow-alt-circle-right" />
      <Button text="Resume" icon="fa fa-file-alt" />
    </div>
  </section>
);
