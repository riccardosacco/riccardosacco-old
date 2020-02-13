import React from "react";

import Button from "../../components/ui/Button";

import Resume from "../../components/Resume";

export default () => (
  <section className="resume home">
    <div className="container">
      <h2>My resume</h2>
      <Resume />
      <Button
        href="/portfolio"
        text="View Portfolio"
        icon="fa fa-laptop-code"
      />
    </div>
  </section>
);
