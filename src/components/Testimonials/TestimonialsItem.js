import React from "react";

const TestimonialsItem = ({ description, avatar, name, job }) => (
  <div className="testimonial">
    <p className="description">{description}</p>
    <div className="source">
      {avatar !== "" && (
        <img
          className="avatar"
          src={`/img/testimonials/${avatar}`}
          alt={name}
        />
      )}
      <div>
        <div className="name">{name}</div>
        <div className="job">{job}</div>
      </div>
    </div>
  </div>
);

export default TestimonialsItem;
