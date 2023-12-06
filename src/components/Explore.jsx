import React from "react";

const Explore = () => {
  return (
    <section
      className="min-h-[400px] mb-16
     lg:mb-4"
    >
      <div className="container mx-auto h-full">
        <div className="h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center">
          <h3
            className="text-3xl font-semibold mb-8 text-black"
            data-aos="fade-right"
            data-aos-offset="600"
          >
            Explore class in new way
          </h3>
          <p
            className="max-w-xs mb-12 text-black font-secondary"
            data-aos="fade-right"
            data-aos-offset="500"
          >
            Classes are dynamic spaces of learning and growth. They bring
            together diverse individuals, fostering collaboration,
            knowledge-sharing, and personal development. Through engaging
            discussions, interactive activities, and supportive interactions.
          </p>
        </div>
        {/* form */}
        <form
          className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
          data-aos="fade-up"
          dat-aos-offset="200"
        >
          <input
            className="bg-gradient-to-t from-[#341D38] to-[#000000] h-12
        px-4 outline-none rounded-md"
            type="text"
            placeholder="Your email"
          />
          <button className="btn"
          data-aos="fade-up"
          dat-aos-offset="200"
          >Start Now</button>
        </form>
      </div>
    </section>
  );
};

export default Explore;
