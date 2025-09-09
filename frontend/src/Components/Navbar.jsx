import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-nova text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">NOVA</Link>
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-novaLight">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-novaLight">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-novaLight">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-novaLight">Contact</Link>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-novaLight px-4 py-2 rounded-lg hover:bg-novaDark transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
