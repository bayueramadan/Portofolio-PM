import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // logic hide/show saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scroll down -> hide
      } else {
        setShowNavbar(true); // scroll up -> show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-transparent backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold text-white">
          Bayu Erfan
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link
              to="/about"
              className="inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:text-black "
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:text-black"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:text-black"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="#linkedin"
              className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black transform duration-300 ease-in-out hover:scale-105"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </li>
        </ul>

        {/* Burger button mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg text-white px-6 py-6 space-y-4">
          <a
            href="#about"
            className="block text-lg font-medium hover:text-amber-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="block text-lg font-medium hover:text-amber-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#blog"
            className="block text-lg font-medium hover:text-amber-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <a
            href="#linkedin"
            className="block text-lg font-medium bg-zinc-800 px-3 py-2 rounded-lg hover:text-amber-400 hover:text-black text-center"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </div>
      )}
    </nav>
  );
}
