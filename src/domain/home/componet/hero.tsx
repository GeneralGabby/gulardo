import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative">
      <div>
        <img
          className="bg-cover w-screen h-screen"
          src="/src/assets/images/hero_bg.png"
          alt="hero"
        />
      </div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.p
          className="text-sm font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          GULARDO TAILORS
        </motion.p>

        {/* Text coming from the left */}
        <motion.h1
          className="text-4xl md:text-6xl md:w-3xl font-bold mb-8 text-center"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Elevate Your Style – Discover the Latest Trends Today!
        </motion.h1>

        {/* Button coming from the right */}
        <motion.button
          className="px-16 py-3 bg-white flex font-semibold text-sm text-center items-center rounded-full text-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          EXPLORE OUR PRODUTS <FaArrowRightLong className="ml-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
