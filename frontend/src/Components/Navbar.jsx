import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-green-900" : "bg-[#2c6e32]"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white">
        {/* Left: Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/NOVA logo.png"
            alt="NOVA logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-lg font-bold">NOVA</span>
        </a>

        {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex items-center gap-8 text-base font-medium">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">All Courses</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">Blogs </li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>

          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800">
            Works
          </button>
          <button className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800">
            Contact
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
