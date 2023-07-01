import React from "react";
import User from "../components/Users";
import Img from "../assets/img/banner-img.png";
import Users from "../components/Users";
const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div>
            <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
            // this is for animation
            data-aos='fade-down'
            data-aos-delay='500'

            >
              Let's Explore <br />
              Three_Dimensional Visually
            </h1>
            <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
// this is animation
data-aos='fade-down'
data-aos-delay='600'

             >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              reprehenderit omnis atque repudiandae autem. Accusamus et totam ex
              sapiente impedit modi. Molestias neque repellendus repellat
              corrupti laudantium vero corporis? Ea?
            </p>
            {/* btns */}
            <div className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
            //this is for animation
            data-aos='fade-down'
            data-aos-delay='700'
            >
              <button className="btn">Get it now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div 
          //this is for animation
          data-aos='fade-up'
          data-aos-delay='800'
          >
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
