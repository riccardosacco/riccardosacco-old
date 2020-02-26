import React, { useContext } from "react";
import Context from "../../context";

import TestimonialsItems from "../../components/Testimonials";

const Testimonials = () => {
  const { testimonials } = useContext(Context).settings;
  return (
    <>
      {!testimonials.hidden && (
        <section className="testimonialspage home">
          <div className="container">
            <h2>Testimonials</h2>
            <p></p>
            <TestimonialsItems />
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
