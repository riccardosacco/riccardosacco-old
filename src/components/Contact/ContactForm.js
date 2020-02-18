import React from "react";

const ContactForm = () => {
  return (
    <form action="" className="contact-form" id="contact-form">
      <input className="contact-input" placeholder="Name" type="text" />
      <input className="contact-input" placeholder="Email" type="email" />
      <textarea
        className="contact-input"
        placeholder="Message"
        id=""
        rows="10"
      ></textarea>
    </form>
  );
};

export default ContactForm;
