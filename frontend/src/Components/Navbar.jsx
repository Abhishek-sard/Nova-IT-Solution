import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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

  const linkClasses =
    "hover:text-gray-300 transition-colors duration-200";
  const activeClasses =
    "text-gray-300 border-b-2 border-gray-300"; // highlight active

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
      ${scrolled ? "bg-green-900" : "bg-[#2c6e32]"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 text-white">
        
        {/* Logo (pushed a little inside) */}
        <NavLink to="/" className="flex items-center gap-2 ml-2 md:ml-4">
          <img
            src="/Logo White.png"
            alt="NOVA logo"
            className="h-12 w-auto object-contain"
          />
          <img
            src="/Nova white1.png"
            alt="NOVA text logo"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-base font-medium">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-courses"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
              >
                Our Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/gallery"
            className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800"
          >
            Contact
          </NavLink>
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
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-courses"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Our Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClasses : linkClasses
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex flex-col gap-2 mt-4">
            <NavLink
              to="/gallery"
              className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800 text-center"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className="px-4 py-2 bg-[#2c6e32] border border-white rounded-md hover:bg-green-800 text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
