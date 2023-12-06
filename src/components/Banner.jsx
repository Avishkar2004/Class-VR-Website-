import React from "react";
import Img from "../assets/img/banner-img.png";
import Users from "../components/Users";
const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left text-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div>
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              // this is for animation
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Let's Explore our
              <br />
              Beautiful classes
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              // this is animation
              data-aos="fade-down"
              data-aos-delay="400"
            >
              "Embrace the challenge of coding, for within its intricate lines
              lie endless possibilities. With every line you write, you shape a
              world of innovation, creativity, and problem-solving. Let your
              passion guide you to new heights."
            </p>
            {/* btns */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              //this is for animation
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <button className="btn hover:text-amber-500">Enroll now</button>
              <a
                className="border-b-2 border-transparent hover:border-yellow-400 transition ease-out"
                href="#"
              >
                Explore Class
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div
            //this is for animation
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              className="rounded-xl lg:rounded lg:pl-28"
              src={Img}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
