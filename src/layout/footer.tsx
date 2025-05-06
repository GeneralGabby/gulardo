import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillPersonFill, BsTwitterX } from "react-icons/bs";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const hoverEffect = {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0], // Wiggle effect
    transition: { duration: 0.5 },
  };

  return (
    <>
      <motion.footer
        className="bg-gradient-to-r from-gray-900 to-black text-white py-4 pt-8"
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
          >
            {/* About Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">About Gulardo</h2>
              <p className="text-gray-300 text-sm">
                At <strong>Gulardo</strong>, we believe that fashion is more
                than just clothing, it’s a form of art. Our mission is to create
                exquisite, high quality garments that blend timeless elegance
                with modern trends, catering to men, women, and children. Every
                piece we design is a masterpiece, crafted with precision,
                passion, and a deep appreciation for artistry.
              </p>
              <p className="text-gray-300 text-sm mt-4">
                <strong>Where Fashion Meets Artistry</strong> this is more than
                just our motto; it’s the essence of everything we do. Join us on
                this journey, and let Gulardo redefine your wardrobe with pieces
                that are as unique as you are.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2 font-medium">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 transition duration-300 ${
                        location.pathname === link.path
                          ? "text-gray-400 hover:text-gray-500"
                          : "text-gray-300 transition-colors hover:text-gray-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <div className="flex space-x-4 items-center">
                <motion.a
                  href="https://github.com/GeneralGabby"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverEffect}
                >
                  <FaPhone className="text-2xl text-gray-300 hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="mailto:gabrielabunor@gmail.com"
                  whileHover={hoverEffect}
                >
                  <FaEnvelope className="text-3xl text-gray-300 hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/gabriel-abunor-85181934a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverEffect}
                >
                  <AiFillInstagram className="text-3xl text-gray-300 hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverEffect}
                >
                  <BsTwitterX className="text-2xl text-gray-300 hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={hoverEffect}
                >
                  <BsFillPersonFill className="text-3xl text-gray-300 hover:text-white transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            className="border-t border-gray-700 pt-4 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Gulardo Tailors. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
