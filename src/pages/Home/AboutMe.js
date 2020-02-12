import React, { Fragment } from "react";
import Button from "../../components/ui/Button";

export default ({ name, job, description }) => (
  <section className="about-me home">
    <div className="container">
      <h1 className="name">{name}</h1>
      <div className="tagline">{job}</div>
      <div className="description">
        {description.map((text, index) => (
          <Fragment key={index}>
            {text}
            <br />
          </Fragment>
        ))}
      </div>
      <Button text="Portfolio" icon="fa fa-laptop-code" />
      <Button text="Resume" icon="fa fa-file-alt" />
    </div>
  </section>
);
