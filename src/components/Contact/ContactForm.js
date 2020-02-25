import React, { useState } from "react";

import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({});

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await axios.post("/", { "form-name": "contact", ...form });

    console.log(response);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        id="name"
        className="contact-input"
        placeholder="Name"
        type="text"
        onChange={handleChange}
        required
      />
      <input
        id="email"
        className="contact-input"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        className="contact-input"
        placeholder="Message"
        onChange={handleChange}
        rows="10"
      ></textarea>
      <button type="submit" className="button button-block">
        Contact Me
      </button>
    </form>
  );
};

export default ContactForm;
