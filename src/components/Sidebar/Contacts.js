import React from "react";

const ContactItem = ({ value, link, icon }) => (
  <li>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`${icon} fa-fw mr-1`}></i>
      <span>{value}</span>
    </a>
  </li>
);

const Contacts = ({ contacts }) => (
  <div className="contacts">
    <ul>
      {contacts.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </ul>
  </div>
);

export default Contacts;
