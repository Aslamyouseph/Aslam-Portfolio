import React, { useState } from "react";
import "./navigationBar.css";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Overview", path: "/overview" },
    { name: "About Me", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
    { name: "Projects", path: "/projects" },
    { name: "Live Websites", path: "/websites" },
    { name: "My Resume", path: "/resume" },
    { name: "Social Media", path: "/social" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-700 text-white shadow-lg py-8 px-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link
          to="/"
          className="text-3xl md:text-4xl font-extrabold tracking-widest text-white"
        >
          Hello <span className="text-yellow-300">Aslam</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-xl font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-yellow-300 transition duration-300 ease-in-out hover:scale-110"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 bg-gradient-to-b from-blue-700 to-indigo-800 shadow-lg rounded-lg py-6 px-4 space-y-5 text-lg font-semibold text-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-yellow-300 transition duration-300 hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
