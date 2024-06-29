import React, { useState } from "react";
import { Link } from "react-router-dom";
import ldlogo from "../../assets/ldlogo1.png";
import aicte from "../../assets/aicte.png";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="mx-auto">
      <div className="flex w-10/12 justify-between items-center mx-auto mt-6 mb-6">
        <img
          src={ldlogo}
          alt="ldlogo"
          className="sm:w-[250px] md:w-fit object-cover"
        />
        <img src={aicte} alt="aicte" className="sm:hidden lg:block" />
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? (
            <FaTimes className="text-[#00008B]" />
          ) : (
            <FaBars className="text-[#00008B]" />
          )}
        </button>
      </div>
      <nav className="bg-white border border-gray-200 flex items-center justify-between  sm:p-4 md:p-0 text-[#687074]">
        <ul
          className={`md:flex flex-col md:flex-row md:items-center justify-center  w-full ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="border-b md:border-b-0 md:border-l md:border-r border-gray-200 px-6 py-2 h-[40px] flex items-center hover:bg-[#00008B] hover:text-white">
            <Link
              to="/"
              className="flex items-center md:justify-center w-full h-full"
            >
              <FaHome className="text-xl" />
            </Link>
          </li>
          <li className="sm:border-b md:border-b-0 md:border-r border-gray-200 px-6 py-2 hover:bg-[#00008B] hover:text-white">
            <Link to="/about" className="flex items-center gap-x-1">
              About
            </Link>
          </li>
          <li className="sm:border-b md:border-b-0 md:border-r border-gray-200 px-6 py-2 hover:bg-[#00008B] hover:text-white">
            <Link to="/academics" className="flex items-center gap-x-1">
              Academics
            </Link>
          </li>
          <li className="sm:border-b md:border-b-0 md:border-r border-gray-200 px-6 py-2 hover:bg-[#00008B] hover:text-white">
            <Link to="/departments" className="flex items-center gap-x-1">
              Departments
            </Link>
          </li>
          <li className="sm:border-b md:border-b-0 md:border-r border-gray-200 px-6 py-2 hover:bg-[#00008B] hover:text-white">
            <Link to="/placement">
              Placement
            </Link>
          </li>
          <li className="sm:border-b md:border-b-0 md:border-r border-gray-200 px-6 py-2 hover:bg-[#00008B] hover:text-white">
            <Link to="/campus">
              Campus
            </Link>
          </li>
          <li className="sm:border-b md:border-b-0 md:border-r border-gray-200 px-6 py-2 hover:bg-[#00008B] hover:text-white">
            <Link to="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
