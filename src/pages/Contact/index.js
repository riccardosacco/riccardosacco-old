import React, { useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

import Context from "../../context";

import ContactForm from "../../components/Contact/ContactForm";
import BusinessCard from "../../components/BusinessCard";

const Contact = ({ title }) => {
  //Change document title
  useEffect(() => {
    document.title = title;
  });

  return (
    <Context.Consumer>
      {context => {
        const { contact, businessCard } = context.settings;
        return (
          <div className="contact page">
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
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Contact;
