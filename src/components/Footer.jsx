import React from "react";
import { footerData } from "../data";
import Copyright from "./Copyright";
import Socials from "./Socials";

const Footer = () => {
  // destructure footer data
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative z-20 bg-dark lg:bg-transparent lg:min-h-[200px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20 lg:pt-32">
      <div className="container mx-auto h-full">
        {/* newsletter & info */}
        <div>
          {/* newletter */}
          {/* info */}
          <div className="flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12">
            {/* contact */}
            <div className="flex-1 lg:max-w-[170px]">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-black font-primary mb-[22px]">
                {contact.title}
              </div>
              <div className="capitalize text-black">{contact.address}</div>
              <div className="capitalize text-black">{contact.phone}</div>
            </div>
            {/* program */}
            <div className="flex-1">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-black font-primary mb-[22px]">
                {hours.title}
              </div>
              <div className="flex text-black gap-x-[46px]">
                {hours.program.map((item, index) => {
                  return (
                    <div className="capitalize" key={index}>
                      <div>
                        <div className="text-black">{item.days}</div>
                        <div className="text-[20px] text-black">
                          {item.hours}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* social */}
            <div className="flex-1 lg:max-w-[400px] mb-12 text-black">
              <div className="capitalize text-[20px] lg:text-[22px] font-normal text-black font-primary mb-[32px]  lg:h-8">
                {social.title}
              </div>
              <Socials />
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
