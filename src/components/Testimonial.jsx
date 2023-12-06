import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2
              className="text-3xl font-bold mb-6 text-black"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1000"
            >
              What our student say
            </h2>
            <p
              className="max-w-2xl mx-auto mb-12 lg:mb-24 text-black"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1100"
            >
              Our JS classes are awesome! They help us create reusable objects
              with shared properties and methods, making our code organized and
              enabling powerful object-oriented programming in JavaScript.
            </p>
          </div>
          {/* slider */}
          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
