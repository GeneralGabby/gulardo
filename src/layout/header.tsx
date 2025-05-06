import { useEffect, useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { LuInstagram, LuMail } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed z-10 top-0 left-0 w-full text-gray-700">
      <nav
        className={`container bg-white bg-opacity-60 shadow-md p-5 rounded-full mx-auto flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "mt-0" : "mt-6"
        }`}
      >
        <ul className="flex space-x-8 px-4">
          <li>
            <AiOutlinePhone size={25} />
          </li>
          <li>
            <LuMail size={25} />
          </li>
          <li>
            <LuInstagram size={23} />
          </li>
          <li>
            <BsTwitterX size={22} />
          </li>
          <li>
            <IoPersonOutline size={22} />
          </li>
        </ul>
        <img
          src="/src/assets/images/Logo.png"
          alt="logo"
          className="items-center justify-center h-8 w-auto"
        />
        <ul className="flex text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative px-4 py-2 transition duration-300 ${
                  location.pathname === link.path
                    ? "text-gray-800 after:absolute after:left-4 after:bottom-1 after:w-1/2 after:h-[2px] after:bg-gray-800"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
