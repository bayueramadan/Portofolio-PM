import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const handleNav = (to) => (e) => {
    e.preventDefault();
    setIsOpen(false); // tutup burger setelah klik
    navigate(to); // pindah route
    window.scrollTo(0, 0); // scroll ke atas
  };

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
          <img
            src="/assets/bayu.jpg"
            alt=""
            className="w-10 h-10 rounded-full inline-block mr-2"
          />
          Bayu Erfan
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <button
              onClick={handleNav("/about")}
              className="inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold cursor-pointer"
            >
              About Me
            </button>
          </li>

          <li>
            <button
              onClick={handleNav("/project")}
              className="inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold cursor-pointer"
            >
              Project
            </button>
          </li>

          <li>
            <button
              onClick={handleNav("/contact")}
              className="inline-block transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold cursor-pointer"
            >
              Contact
            </button>
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
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl z-50"
        >
          {isOpen ? (
            <i className="ri-close-fill"></i>
          ) : (
            <i className="ri-menu-line"></i>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black/40 rounded-md backdrop-blur-lg text-white px-6 py-6 space-y-4 md:hidden z-40"
          >
            <button
              onClick={handleNav("/about")}
              className="block text-lg font-medium hover:text-amber-400 transition-colors"
            >
              About Me
            </button>
            <button
              onClick={handleNav("/project")}
              className="block text-lg font-medium hover:text-amber-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={handleNav("/contact")}
              className="block text-lg font-medium hover:text-amber-400 transition-colors"
            >
              Contact
            </button>
            <a
              href="https://linkedin.com/in/your-profile"
              className="block text-lg font-medium bg-zinc-800 px-3 py-2 rounded-lg hover:text-amber-400 text-center"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
