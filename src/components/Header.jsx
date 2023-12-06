import React from "react";
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";
const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="700"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img className="h-[40px] lg:h-[50px]" src={Logo} alt="" />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-black cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
