import React from "react";
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="text-3xl font-bold mb-6 text-black"
          //this is from animation
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Classes types
        </h2>
        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="250"
            data-aos-delay="700"
          >
            <img className="rounded-xl" src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-pink/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 text-blue-400">
                Python class
              </h4>
              <p>
                Python classes are blueprint templates that define the structure
                and behavior of objects. They encapsulate data and functions,
                allowing for efficient code.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="250"
            data-aos-delay="800"
          >
            <img className="rounded-xl" src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 text-black">
                Web development
              </h4>
              <p>
                Web development classes teach the necessary skills and tools to
                create websites and web applications. They cover HTML, CSS,
                JavaScript, and frameworks like React or Django.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="250"
            data-aos-delay="900"
          >
            <img className="rounded-xl" src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 text-black">
                Data engineer
              </h4>
              <p>
                A data engineer is a professional who designs, develops, and
                manages the infrastructure and systems that facilitate the
                storage, processing, and analysis of large volumes of data.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="250"
            data-aos-delay="1000"
          >
            <img className="rounded-xl" src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2 text-yellow-400">
                Javascript
              </h4>
              <p className="text-yellow-100">
                JS classes are a way to define objects and their behaviors using
                a syntactic sugar over the prototype-based inheritance system in
                JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
