import React from "react";

const ContactForm = () => {
  return (
    <form action="" className="contact-form" id="contact-form">
      <input
        className="contact-input"
        placeholder="Name"
        type="text"
        required
      />
      <input
        className="contact-input"
        placeholder="Email"
        type="email"
        required
      />
      <textarea
        className="contact-input"
        placeholder="Message"
        id=""
        rows="10"
      ></textarea>
      <div className="button button-block">Contact Me</div>
    </form>
  );
};

export default ContactForm;
