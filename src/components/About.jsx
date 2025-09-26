import { assets } from "../assets/assets";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="About"
      className="flex flex-col items-center justify-center container mx-auto px-6 md:px-20 lg:px-32 py-14 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        About{" "}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-md text-center mb-10">
        Passionate About Properties, Dedicated to Your Vision.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        <img
          src={assets.brand_img}
          alt="Our Brand"
          className="w-full sm:w-1/2 max-w-lg rounded-lg shadow-md"
        />

        <div className="flex flex-col items-center md:items-start text-gray-600">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 md:gap-12 w-full">
            <div>
              <p className="text-4xl font-semibold text-gray-800">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">12+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">20+</p>
              <p className="text-sm">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">25+</p>
              <p className="text-sm">Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg leading-relaxed text-center md:text-left">
            As a builder, we believe real estate is more than just structures —
            it’s about creating spaces where people can live, work, and grow
            with confidence. Our projects combine modern architecture with
            long-term value, ensuring every investment brings comfort,
            functionality, and strong returns. With every development, we strive
            to enrich lives and build lasting trust with our customers.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-2 rounded-lg shadow">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
