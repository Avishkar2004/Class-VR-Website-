import React from "react";
import { socialData } from "../data";

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <a
            className="border border-blue-500 rounded-full w-[35px] h-[35px] flex justify-center items-center text-sm hover:text-accent transition-all hover:bg-blue-500"
            href={item.href}
            key={index}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
