import React, { useState } from "react";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form })
    });

    setSuccess(response.status === 200 ? true : false);
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {success && (
        <div className="alert alert-success alert-custom">
          Thank your for your contact request! I'll email you soon!
          <div className="close-icon" onClick={() => setSuccess(false)}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      )}
      <input
        id="name"
        className="contact-input"
        placeholder="Name"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        id="email"
        className="contact-input"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        className="contact-input"
        placeholder="Message"
        value={form.message}
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
