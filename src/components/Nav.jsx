import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="hidden lg:flex text-black">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="text-lg hover:text-amber-500">
          <Link to="/">Home</Link>
        </li>
        <li className="text-lg hover:text-amber-500">
          <Link to="/companies">Companies</Link>
        </li>
        <li className="text-lg hover:text-amber-500">
          <Link to="/about">About us</Link>
        </li>
        <li className="text-lg hover:text-amber-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="btn hover:text-amber-500">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
