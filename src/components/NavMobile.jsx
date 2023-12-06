import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden ng-[#251f3f] w-full h-full text-black bg-black/10">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl bg-[#a6c1e9] absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
        <li className="text-lg hover:text-amber-500 text-white">
        <Link to="/">Home</Link>
        </li>
        <li className="text-lg hover:text-amber-500 text-white">
        <Link to="/companies">Companies</Link>
        </li>
        <li className="text-lg hover:text-amber-500 text-white">
        <Link to="/about">About us</Link>
        </li>
        <li className="text-lg hover:text-amber-500 text-white">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="btn hover:text-amber-500 text-white">
        <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
