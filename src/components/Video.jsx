import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#524686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-clip lg:flex-row lg:justify-between">
          <h3
            className="text-2xl font-semibold mb-8 lg:mb-0"
            //this is from animation
            data-aos="fade-right"
            data-aos-offset="350"
          >
            Awesome experience with virtual reality world
          </h3>
          {/* modal video */}
          <ModalVideo
            channel="youtube"
            autplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
          {/* video */}
          <div
            className="bg-video bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
            //this is from animation
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
