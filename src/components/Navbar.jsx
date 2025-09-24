import { useState } from "react";
import { assets } from "../assets/assets";

function Navbar() {
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-6 md:px-20 lg:px-32 bg-transparent">
        <img
          src={assets.logo}
          alt="Estate Logo"
          className="h-10 cursor-pointer"
        />

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </li>
        </ul>

        <button className="hidden md:block bg-white text-gray-900 font-semibold px-8 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
          Sign-Up
        </button>
        <img src={assets.menu_icon} className="md:hidden w-7" alt="" />
      </div>

      {/*Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img src={assets.cross_icon} className="w-6" alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#Header" className="px-4 py-2 rounded-full inline block">
            Home
          </a>
          <a href="#About" className="px-4 py-2 rounded-full inline block">
            About
          </a>
          <a href="#Projects" className="px-4 py-2 rounded-full inline block">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
