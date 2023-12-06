import React from "react";
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* image */}
            <div
              className="self-start"
              //this is from animation
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img className="rounded-xl" src={Img1} alt="" />
            </div>

            <div
              className="self-end"
              //this is from animation
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="400"


            >
              <img className="rounded-xl" src={Img2} alt="" />
            </div>
          </div>
          {/* text */}
          <div
            className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0"
            //this is from animation
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="text-3xl font-bold mb-6 text-black">
              New Experience while learning
            </h2>
            <p className="font-secondary mb-6 text-black">
              I bought some shoes from a drug dealer. I don't know what he laced
              them with, but I've been tripping all day!
            </p>
            <button className="btn">Enroll now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
