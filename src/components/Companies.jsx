import React from "react";
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Companies = () => {
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
          Compony types
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
                Google
              </h4>
              <p>
                Google's most popular product is its search engine, which is the
                most used search engine in the world. Google also offers a
                variety of other products and services, including Gmail.
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
              <h4 className="font-semibold text-xl mb-2 text-black">Twitter</h4>
              <p>
                Twitter is a social media platform that allows users to post
                short messages, called "tweets," of up to 280 characters. Tweets
                can be text, photos, videos, or links.
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
              <h4 className="font-semibold text-xl mb-2 text-black">Amazon</h4>
              <p>
                Amazon is an American multinational technology company which
                focuses on e-commerce, cloud computing, digital streaming, and
                artificial intelligence. It has been referred.
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
                Microsoft
              </h4>
              <p className="text-yellow-100">
                Microsoft is an American multinational technology company that
                develops computer software, consumer electronics, personal
                computers, and related services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
