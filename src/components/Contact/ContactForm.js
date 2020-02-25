import React from "react";

import NetlifyForm from "react-netlify-form";

const ContactForm = () => {
  return (
    <NetlifyForm name="Contact Form">
      {({ loading, error, success }) => (
        <div className="contact-form" id="contact-form">
          {loading && <div className="alert alert-info">Loading...</div>}
          {error && (
            <div className="alert alert-error">
              Your information was not sent. Please try again later.
            </div>
          )}
          {success && (
            <div className="alert alert-success">
              Thank you for contacting me!
            </div>
          )}
          <input
            className="contact-input"
            placeholder="Name"
            name="name"
            type="text"
            required
          />
          <input
            className="contact-input"
            placeholder="Email"
            name="email"
            type="email"
            required
          />
          <textarea
            className="contact-input"
            placeholder="Message"
            name="message"
            rows="10"
          ></textarea>
          <button className="button button-block">Contact Me</button>
        </div>
      )}
    </NetlifyForm>
  );
};

export default ContactForm;
