import React from "react";

const toggleDescription = e => {
  const description = e.currentTarget.nextElementSibling;
  const icon = e.currentTarget.querySelector(".arrow-toggle");

  if (description.style.maxHeight) {
    icon.classList.toggle("active");
    description.style.maxHeight = null;
  } else {
    icon.classList.toggle("active");
    description.style.maxHeight = description.scrollHeight + "px";
  }
};

const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const dateDiff = (from, to) => {
  const diff = Math.floor(to.getTime() - from.getTime());
  const day = 1000 * 60 * 60 * 24;

  let days = Math.floor(diff / day);
  let years = Math.floor(days / 365);
  let months = Math.ceil(days / 31 - years * 12);

  let output = "";

  if (years) {
    output += years > 1 ? `${years} years ` : `${years} year `;
  }
  if (months) {
    output += months > 1 ? `${months} months` : `${months} month`;
  }

  return output;
};

const formatDate = date => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

const formatDateString = (from, to) => {
  let output = formatDate(from);
  if (isToday(to)) {
    output += " - present";
  } else {
    output += ` - ${formatDate(to)} `;
  }
  return output;
};

const WorkItem = ({
  title,
  subtitle,
  company,
  link,
  place,
  icon,
  description,
  from,
  to
}) => {
  icon = icon === "" ? "company.png" : icon;
  const date = from && to && formatDateString(from, to);
  const time = from && to && dateDiff(from, to);
  return (
    <div className="work-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={`img/resume/${icon}`} alt="" className="work-icon" />
      </a>
      <div
        className={`work-content-container${
          description ? "" : " no-description"
        }`}
        onClick={toggleDescription}
      >
        <div className="work-content">
          <div className="work-title">{title}</div>
          {company && <div className="work-company">{company}</div>}
          {subtitle && <div className="work-subtitle">{subtitle}</div>}
          {from && to && (
            <div className="work-duration">
              <span className="work-date">{date}</span>
              <span className="work-time">{time}</span>
            </div>
          )}
          {place && <div className="work-place">{place}</div>}
        </div>
        <div className="work-toggle">
          <div className="arrow-toggle">
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
        </div>
      </div>
      <div className="work-description">{description}</div>
    </div>
  );
};

export default WorkItem;
