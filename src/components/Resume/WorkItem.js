import React from "react";

const toggleDescription = e => {
  const description = e.currentTarget.nextElementSibling;
  const icon = e.currentTarget.querySelector(".arrow-toggle");

  if (description.style.maxHeight) {
    icon.classList.toggle("active");
    description.style.maxHeight = null;
  } else {
    icon.classList.toggle("active");
    description.style.maxHeight = description.scrollHeight + "px";
  }
};

const WorkItem = () => (
  <div className="work-item">
    <img src="img/resume/wildcodeschool.png" alt="" className="work-icon" />
    <div className="work-content-container" onClick={toggleDescription}>
      <div className="work-content">
        <div className="work-title">Full Stack Developer</div>
        <div className="work-company">Wild Code School</div>
        <div className="work-duration">
          <span className="work-date">gen 2020 - present</span>
          <span className="work-time">2 mesi</span>
        </div>
        <div className="work-place">Milan, Italy</div>
      </div>
      <div className="work-toggle">
        <div className="arrow-toggle">
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
      </div>
    </div>
    <div className="work-description">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        sint ab aut nemo fuga eum expedita sed odit nulla perferendis sit unde
        ipsam cupiditate aspernatur nobis beatae modi, hic necessitatibus atque
        qui? Quae quidem quaerat non consequatur porro, facere consequuntur
        maiores animi, doloremque vitae sunt iure est, amet asperiores
        architecto?
      </p>
    </div>
  </div>
);

export default WorkItem;
