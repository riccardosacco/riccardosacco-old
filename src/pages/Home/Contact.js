import React from "react";

import Context from "../../context";

import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => (
  <Context.Consumer>
    {context => {
      const { settings } = context;
      return (
        <section className="contact home">
          <div className="container">
            <h2>Contact me</h2>
            <p></p>
            <div className="contact-row">
              <ContactForm />
              <div className="contact-details">
                <div className="email">riccardo@itwebservices.it</div>
              </div>
            </div>
          </div>
        </section>
      );
    }}
  </Context.Consumer>
);

export default Contact;
