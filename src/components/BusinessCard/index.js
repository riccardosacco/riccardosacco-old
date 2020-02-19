import React from "react";

import QRCode from "qrcode.react";
import ReactHtmlParser from "react-html-parser";

const BusinessCard = ({ header, contacts, footer }) => (
  <div className="business-card">
    <div className="header">
      <div className="details">
        <div className="name">{header.name}</div>
        <div className="profession">{header.profession}</div>
      </div>
      <div className="logo">
        <a href={footer.website} target="_blank" rel="noopener noreferrer">
          <img src={header.logo} alt="" />
        </a>
      </div>
    </div>
    <div className="divider"></div>
    <div className="contacts">
      {contacts.map((contact, index) => (
        <div className="contact-item" key={index}>
          <b>{contact.key}</b>
          <a href={contact.link}>{contact.value}</a>
        </div>
      ))}
    </div>
    <div className="divider"></div>
    <div className="footer">
      <div className="place">
        <div className="company">{footer.company}</div>
        <div className="address">{ReactHtmlParser(footer.address)}</div>
      </div>
      <div className="qrcode">
        <a href={footer.website} target="_blank" rel="noopener noreferrer">
          <span>{footer.alias}</span>
          <QRCode value={footer.website} renderAs="svg" level="L" />
        </a>
      </div>
    </div>
  </div>
);

export default BusinessCard;
