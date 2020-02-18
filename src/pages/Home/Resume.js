import React from "react";

import Button from "../../components/ui/Button";

import Resume from "../../components/Resume";

const print = selector => {
  window.print();
};

export default props => (
  <section className="resume home">
    <div className="container">
      <h2>My resume</h2>
      <p></p>
      <Resume {...props} />
      <div className="resume-button">
        <Button
          // href="/resume"
          text="Download Resume"
          icon="fa fa-file-alt"
          onClick={print}
        />
      </div>
    </div>
  </section>
);
