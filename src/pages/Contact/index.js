import React, { useEffect } from "react";

const Contact = (settings, title) => {
  //Change document title
  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="contact">
      <div className="container">
        <h2>Contact me</h2>
      </div>
    </div>
  );
};

export default Contact;
