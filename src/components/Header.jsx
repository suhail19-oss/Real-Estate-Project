import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <section
      id="Header"
      className="relative h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex flex-1 flex-col justify-center items-center text-center text-white px-6 z-10"
      >
        <h2 className="text-3xl md:text-6xl font-extrabold drop-shadow-lg max-w-3xl leading-snug">
          Explore homes that fit your dreams.
        </h2>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="#Projects"
            aria-label="View Projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-medium shadow-md transition"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            aria-label="Contact Us"
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-xl text-lg font-medium shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Header;
