import React, { useContext } from "react";
import Context from "../../context";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import TestimonialsItem from "./TestimonialsItem";

const TestimonialsItems = () => {
  const { testimonials } = useContext(Context).settings;

  return (
    <div className="testimonials">
      <OwlCarousel
        items={1}
        margin={15}
        className="owl-theme"
        responsive={{
          576: {
            items: 2
          },
          1200: {
            items: 3
          }
        }}
      >
        {testimonials.items.map((testimonial, index) => (
          <TestimonialsItem {...testimonial} key={index} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TestimonialsItems;
