import React from "react";
import ReactHtmlParser from "react-html-parser";

import Context from "../../context";

import ContactForm from "../../components/Contact/ContactForm";

import BusinessCard from "../../components/BusinessCard";

const Contact = () => (
  <Context.Consumer>
    {context => {
      const { contact, businessCard } = context.settings;
      return (
        <section className="contact home">
          <div className="container">
            <h2>{contact.title}</h2>
            <p>{ReactHtmlParser(contact.subtitle)}</p>
            <div className="contact-row">
              <ContactForm />
              <div className="contact-details">
                <BusinessCard {...businessCard} />
              </div>
            </div>
          </div>
        </section>
      );
    }}
  </Context.Consumer>
);

export default Contact;
