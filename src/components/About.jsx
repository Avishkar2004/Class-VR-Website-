import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7493b1] to-[#556c82] flex flex-col items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
          About Our Classes
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Here, you can provide information about your classes, such as what
          topics they cover, the skills students will learn,
          <span className="font-extrabold">the teaching methodology</span>, and
          any unique features that set your classes apart.
        </p>
        <p className="text-lg sm:text-xl mb-8">
          You can also highlight the benefits of taking your classes, such as
          career opportunities
          <span className="font-extrabold">practical projects</span>, and
          industry-relevant skills. Make sure to emphasize the value and impact
          your classes can have on students.
        </p>
        <p className="text-lg sm:text-xl mb-8">
          With Tailwind CSS, you can create a beautiful and responsive layout
          for your About page.
          <span className="font-extrabold">Utilize Tailwind's</span> utility
          classes and component styles to customize the appearance and ensure a
          consistent design throughout your application.
        </p>
        <div className="bg-[#7493b1] rounded-lg shadow-2xl p-6 w-full mx-auto hover:bg-[#799cc0]">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Our Expert Instructors
          </h3>
          <p className="text-gray-600 text-lg sm:text-xl">
            Our classes are taught by experienced and passionate instructors who
            are experts in their fields. They are committed to providing the
            highest quality education and helping students succeed in their
            learning journey.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
