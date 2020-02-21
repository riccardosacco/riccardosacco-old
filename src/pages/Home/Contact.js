import React, { useContext } from "react";
import ReactHtmlParser from "react-html-parser";

import Context from "../../context";

import ContactForm from "../../components/Contact/ContactForm";
import BusinessCard from "../../components/BusinessCard";

const Contact = () => {
  const { contact, businessCard } = useContext(Context).settings;

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
};

export default Contact;
