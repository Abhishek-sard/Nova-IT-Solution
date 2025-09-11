import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-green-900" : "bg-[#2c6e32]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/NOVA logo.png"
            alt="NOVA logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-lg font-bold">NOVA</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-base font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li>
              <Link
                to="/all-courses"
                className="hover:text-gray-300 cursor-pointer"
              >
                All Courses
              </Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800">
            Works
          </button>
          <button className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2c6e32] text-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li>
              <Link
                to="/all-courses"
                className="hover:text-gray-300 cursor-pointer"
              >
                All Courses
              </Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800">
              Works
            </button>
            <button className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
