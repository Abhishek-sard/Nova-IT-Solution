import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import LOGO from '../../public/NOVA logo.png';
import Navbar from './Navbar';

const Footer = () => {
  return (
    <footer className="bg-[#2c6e32] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link to="#">
            <img src="/Logo White.png" alt="Logo" className="w-24 sm:w-28 mb-4 rounded-lg cursor-pointer" />
          </Link>
          <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
            We provide top-notch services to help your business grow and succeed
            in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/web" className="hover:text-gray-300">Web Development</Link></li>
            <li><Link to="/services/seo" className="hover:text-gray-300">SEO Optimization</Link></li>
            <li><Link to="/services/marketing" className="hover:text-gray-300">Digital Marketing</Link></li>
            <li><Link to="/services/app" className="hover:text-gray-300">App Development</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">📍  Sunsari, Nepal</p>
          <p className='text-sm'>Gudri Line, Inurawa</p>
          <p className="text-sm">📞 +977 9764453517</p>
          <p className="text-sm">✉️ nova@gmail.</p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61580412253689" className="hover:text-gray-300"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={20} /></a>
            <a href="https://www.instagram.com/novait_solutions/" className="hover:text-gray-300"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/nova-it-solutions-0a00a4385/" className="hover:text-gray-300"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-xs sm:text-sm text-gray-300">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
